// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "./SharedStructs.sol";

contract Job {
  SharedStructs.TokenValue[] public offeredValues;

  function initialize(SharedStructs.TokenValue[] calldata  _offeredValues) public {
    for(uint i = 0; i < _offeredValues.length; i++) {
      offeredValues.push(_offeredValues[i]);
    }
  }
}
