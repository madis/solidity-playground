// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "./SharedStructs.sol";
import "./Job.sol";

contract JobMarket {
  event JobCreated(string desc, address tokenAddress);
  function createJob(address _job, SharedStructs.TokenValue[] calldata _offeredValues) public {
    Job(_job).initialize(_offeredValues);
    emit JobCreated("It really was", _offeredValues[0].token.tokenContract.tokenAddress);
  }

  function simpleAnswer(uint number) public pure returns(uint) {
    return number + 42;
  }
}
