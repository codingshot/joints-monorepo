import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import chai from 'chai';
import { solidity } from 'ethereum-waffle';
import { parseUnits } from 'ethers/lib/utils';
import {
  NounsDaoLogicV2,
  NounsDaoLogicV2__factory as NounsDaoLogicV2Factory,
} from '../../../../typechain';
import { getSigners, TestSigners } from '../../../utils';

chai.use(solidity);
const { expect } = chai;

let deployer: SignerWithAddress;
let signers: TestSigners;
let gov: NounsDaoLogicV2;

async function deployGovernorV2(deployer: SignerWithAddress): Promise<NounsDaoLogicV2> {
  return await new NounsDaoLogicV2Factory(deployer).deploy();
}

describe('Dynamic Quorum', () => {
  before(async () => {
    signers = await getSigners();
    deployer = signers.deployer;
    gov = await deployGovernorV2(deployer);
  });

  it('coefficient set to zero', async () => {
    const quorumVotes = await gov.dynamicQuorumVotes(12, 200, {
      minQuorumVotesBPS: 1000,
      maxQuorumVotesBPS: 4000,
      quorumCoefficient: 0,
    });

    expect(quorumVotes).to.equal(20);
  });

  it('increases linearly', async () => {
    const quorumVotes = await gov.dynamicQuorumVotes(18, 200, {
      minQuorumVotesBPS: 1000,
      maxQuorumVotesBPS: 4000,
      quorumCoefficient: parseUnits('1', 6),
    });

    expect(quorumVotes).to.equal(38);
  });

  it('caps the quorum by the max value', async () => {
    let quorumVotes = await gov.dynamicQuorumVotes(60, 200, {
      minQuorumVotesBPS: 1000,
      maxQuorumVotesBPS: 10000,
      quorumCoefficient: parseUnits('3', 6),
    });

    expect(quorumVotes).to.equal(200);

    quorumVotes = await gov.dynamicQuorumVotes(30, 200, {
      minQuorumVotesBPS: 1000,
      maxQuorumVotesBPS: 4000,
      quorumCoefficient: parseUnits('2', 6),
    });

    expect(quorumVotes).to.equal(80);
  });
});
