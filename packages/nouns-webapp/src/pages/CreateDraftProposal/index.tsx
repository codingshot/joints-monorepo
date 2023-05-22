import { Col, Alert, Button } from 'react-bootstrap';
import Section from '../../layout/Section';
import {
  ProposalState,
  ProposalTransaction,
  useProposal,
  useProposalCount,
  useProposalThreshold,
  usePropose,
} from '../../wrappers/nounsDao';
import { useUserVotes } from '../../wrappers/nounToken';
import classes from '../CreateProposal/CreateProposal.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useEthers } from '@usedapp/core';
import { AlertModal, setAlertModal } from '../../state/slices/application';
import ProposalEditor from '../../components/ProposalEditor';
import ProposalTransactions from '../../components/ProposalTransactions';
import { withStepProgress } from 'react-stepz';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { Trans } from '@lingui/macro';
import clsx from 'clsx';
import navBarButtonClasses from '../../components/NavBarButton/NavBarButton.module.css';
import ProposalActionModal from '../../components/ProposalActionsModal';
import config from '../../config';
import { useEthNeeded } from '../../utils/tokenBuyerContractUtils/tokenBuyer';
import { saveDraftProposal } from './DraftProposalsStorage';

const CreateDraftProposalPage = () => {
  const history = useHistory();
  const { account } = useEthers();
  const latestProposalId = useProposalCount();
  const latestProposal = useProposal(latestProposalId ?? 0);
  const availableVotes = useUserVotes();
  const proposalThreshold = useProposalThreshold();

  const { propose, proposeState } = usePropose();

  const [proposalTransactions, setProposalTransactions] = useState<ProposalTransaction[]>([]);
  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setBodyValue] = useState('');

  const [totalUSDCPayment, setTotalUSDCPayment] = useState<number>(0);
  const [tokenBuyerTopUpEth, setTokenBuyerTopUpETH] = useState<string>('0');
  const ethNeeded = useEthNeeded(config.addresses.tokenBuyer ?? '', totalUSDCPayment);

  const handleAddProposalAction = useCallback(
    (transaction: ProposalTransaction) => {
      if (!transaction.address.startsWith('0x')) {
        transaction.address = `0x${transaction.address}`;
      }
      if (!transaction.calldata.startsWith('0x')) {
        transaction.calldata = `0x${transaction.calldata}`;
      }

      if (transaction.usdcValue) {
        setTotalUSDCPayment(totalUSDCPayment + transaction.usdcValue);
      }

      setProposalTransactions([...proposalTransactions, transaction]);
      setShowTransactionFormModal(false);
    },
    [proposalTransactions, totalUSDCPayment],
  );

  const handleRemoveProposalAction = useCallback(
    (index: number) => {
      setTotalUSDCPayment(totalUSDCPayment - (proposalTransactions[index].usdcValue ?? 0));
      setProposalTransactions(proposalTransactions.filter((_, i) => i !== index));
    },
    [proposalTransactions, totalUSDCPayment],
  );

  useEffect(() => {
    if (ethNeeded !== undefined && ethNeeded !== tokenBuyerTopUpEth) {
      const hasTokenBuyterTopTop =
        proposalTransactions.filter(txn => txn.address === config.addresses.tokenBuyer).length > 0;

      // Add a new top up txn if one isn't there already, else add to the existing one
      if (parseInt(ethNeeded) > 0 && !hasTokenBuyterTopTop) {
        handleAddProposalAction({
          address: config.addresses.tokenBuyer ?? '',
          value: ethNeeded ?? '0',
          calldata: '0x',
          signature: '',
        });
      } else {
        if (parseInt(ethNeeded) > 0) {
          const indexOfTokenBuyerTopUp =
            proposalTransactions
              .map((txn, index: number) => {
                if (txn.address === config.addresses.tokenBuyer) {
                  return index;
                } else {
                  return -1;
                }
              })
              .filter(n => n >= 0) ?? new Array<number>();

          const txns = proposalTransactions;
          if (indexOfTokenBuyerTopUp.length > 0) {
            txns[indexOfTokenBuyerTopUp[0]].value = ethNeeded;
            setProposalTransactions(txns);
          }
        }
      }

      setTokenBuyerTopUpETH(ethNeeded ?? '0');
    }
  }, [
    ethNeeded,
    handleAddProposalAction,
    handleRemoveProposalAction,
    proposalTransactions,
    tokenBuyerTopUpEth,
  ]);

  const handleTitleInput = useCallback(
    (title: string) => {
      setTitleValue(title);
    },
    [setTitleValue],
  );

  const handleBodyInput = useCallback(
    (body: string) => {
      setBodyValue(body);
    },
    [setBodyValue],
  );

  const isFormInvalid = useMemo(
    () => !proposalTransactions.length || titleValue === '' || bodyValue === '',
    [proposalTransactions, titleValue, bodyValue],
  );

  const hasEnoughVote = Boolean(
    availableVotes && proposalThreshold !== undefined && availableVotes > proposalThreshold,
  );

  const handleCreateProposal = async () => {
    const description = `# ${titleValue}\n\n${bodyValue}`;
    saveDraftProposal({
      proposalContent: {
        proposer: account || '',
        targets: proposalTransactions.map(({ address }) => address), // Targets
        values: proposalTransactions.map(({ value }) => value ?? '0'), // Values
        signatures: proposalTransactions.map(({ signature }) => signature), // Signatures
        calldatas: proposalTransactions.map(({ calldata }) => calldata), // Calldatas
        description: description,
      },
      signatures: [],
    });

    history.push('/draft-proposals');
  };

  const [showTransactionFormModal, setShowTransactionFormModal] = useState(false);
  const [isProposePending, setProposePending] = useState(false);

  const dispatch = useAppDispatch();
  const setModal = useCallback((modal: AlertModal) => dispatch(setAlertModal(modal)), [dispatch]);

  useEffect(() => {
    switch (proposeState.status) {
      case 'None':
        setProposePending(false);
        break;
      case 'Mining':
        setProposePending(true);
        break;
      case 'Success':
        setModal({
          title: <Trans>Success</Trans>,
          message: <Trans>Proposal Created!</Trans>,
          show: true,
        });
        setProposePending(false);
        break;
      case 'Fail':
        setModal({
          title: <Trans>Transaction Failed</Trans>,
          message: proposeState?.errorMessage || <Trans>Please try again.</Trans>,
          show: true,
        });
        setProposePending(false);
        break;
      case 'Exception':
        setModal({
          title: <Trans>Error</Trans>,
          message: proposeState?.errorMessage || <Trans>Please try again.</Trans>,
          show: true,
        });
        setProposePending(false);
        break;
    }
  }, [proposeState, setModal]);

  return (
    <Section fullWidth={false} className={classes.createProposalPage}>
      <ProposalActionModal
        onDismiss={() => setShowTransactionFormModal(false)}
        show={showTransactionFormModal}
        onActionAdd={handleAddProposalAction}
      />

      <Col lg={{ span: 8, offset: 2 }} className={classes.createProposalForm}>
        <div className={classes.wrapper}>
          <Link to={'/vote'}>
            <button className={clsx(classes.backButton, navBarButtonClasses.whiteInfo)}>←</button>
          </Link>
          <h3 className={classes.heading}>
            <Trans>Create Draft Proposal</Trans>
          </h3>
        </div>
        <Alert variant="secondary" className={classes.voterIneligibleAlert}>
          <b>
            <Trans>Tip</Trans>
          </b>
          :{' '}
          <Trans>
            Add one or more proposal actions and describe your proposal for the community. The
            proposal cannot be modified after submission, so please verify all information before
            submitting. The voting period will begin after 2 days and last for 5 days.
          </Trans>
          <br />
          <br />
          <Trans>
            You <b>MUST</b> maintain enough voting power to meet the proposal threshold until your
            proposal is executed. If you fail to do so, anyone can cancel your proposal.
          </Trans>
        </Alert>
        <div className="d-grid">
          <Button
            className={classes.proposalActionButton}
            variant="dark"
            onClick={() => setShowTransactionFormModal(true)}
          >
            <Trans>Add Action</Trans>
          </Button>
        </div>
        <ProposalTransactions
          proposalTransactions={proposalTransactions}
          onRemoveProposalTransaction={handleRemoveProposalAction}
        />

        {totalUSDCPayment > 0 && (
          <Alert variant="secondary" className={classes.tokenBuyerNotif}>
            <b>
              <Trans>Note</Trans>
            </b>
            :{' '}
            <Trans>
              Because this proposal contains a USDC fund transfer action we've added an additional
              ETH transaction to refill the TokenBuyer contract. This action allows to DAO to
              continue to trustlessly acquire USDC to fund proposals like this.
            </Trans>
          </Alert>
        )}
        <ProposalEditor
          title={titleValue}
          body={bodyValue}
          onTitleInput={handleTitleInput}
          onBodyInput={handleBodyInput}
        />
        <div className="d-grid gap-2">
          <Button
            className={classes.createProposalButton}
            disabled={isFormInvalid}
            onClick={handleCreateProposal}
          >
            Create draft proposal
          </Button>
        </div>
      </Col>
    </Section>
  );
};

export default withStepProgress(CreateDraftProposalPage);
