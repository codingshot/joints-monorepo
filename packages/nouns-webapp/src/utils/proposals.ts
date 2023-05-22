import { Proposal, ProposalCandidate, ProposalState } from '../wrappers/nounsDao';

export const isProposalUpdatable = (proposal: Proposal, currentBlock: number) => {
  return (
    proposal?.status === ProposalState.UPDATABLE && currentBlock <= proposal.updatePeriodEndBlock
  );
};

export const checkEnoughVotes = (
  availableVotes: number | undefined,
  proposalThreshold: number | undefined,
) => {
  if (availableVotes && proposalThreshold !== undefined && availableVotes > proposalThreshold) {
    return true;
  } else {
    return false;
  }
};

export const checkIsEligibleToPropose = (
  latestProposal: Proposal | undefined,
  account: string | null | undefined,
) => {
  if (
    latestProposal &&
    account &&
    (latestProposal?.status === ProposalState.ACTIVE ||
      latestProposal?.status === ProposalState.PENDING ||
      latestProposal?.status === ProposalState.UPDATABLE) &&
    latestProposal.proposer?.toLowerCase() === account?.toLowerCase()
  ) {
    return true;
  }
  return false;
};

export const checkHasActiveOrPendingProposalOrCandidate = (
  latestProposal: Proposal | undefined,
  account: string | null | undefined,
  // proposalCandidates: ProposalCandidate[]
) => {
  // add this candidates check in once candidates can be labeled as "proposed"
  // const hasProposedCandidate = proposalCandidates.find((candidate) => {
  //   return candidate.proposer.toLowerCase() === account?.toLowerCase();
  // });
  if (
    latestProposal &&
    account &&
    (latestProposal?.status === ProposalState.ACTIVE ||
      latestProposal?.status === ProposalState.PENDING ||
      latestProposal?.status === ProposalState.UPDATABLE) &&
    latestProposal.proposer?.toLowerCase() === account?.toLowerCase()
  ) {
    return true;
  }
  return false;
};
