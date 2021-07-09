// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "./SharedStructs.sol";
import "./Job.sol";

contract JobMarket {
  function createJob(address _job, SharedStructs.TokenValue[] calldata _offeredValues) public {
    Job(_job).initialize(_offeredValues);
  }

  function simpleAnswer(uint number) public view returns(uint) {
    return number + 42;
  }
}
