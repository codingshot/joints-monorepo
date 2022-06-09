import { BigInt } from '@graphprotocol/graph-ts';
import { BIGINT_10K } from './constants';

export function dynamicQuorumVotes(
  againstVotes: i32,
  totalSupply: BigInt,
  minQuorumVotesBPS: i32,
  maxQuorumVotesBPS: i32,
  quorumCoefficient: BigInt,
): BigInt {
  const againstVotesBPS = (againstVotes * 10000) / totalSupply.toI32();
  const quorumAdjustmentBPS = quorumCoefficient
    .times(BigInt.fromI32(againstVotesBPS))
    .div(BigInt.fromI32(<i32>1e6));
  const adjustedQuorumBPS = quorumAdjustmentBPS.plus(BigInt.fromI32(minQuorumVotesBPS));
  const quorumBPS = <i32>Math.min(maxQuorumVotesBPS, adjustedQuorumBPS.toI32());

  return totalSupply.times(BigInt.fromI32(quorumBPS)).div(BigInt.fromI32(10000));
}
