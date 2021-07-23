// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

library SharedStructs {
  enum TokenType {
    ETH,
    ERC20,
    ERC721,
    ERC1155
  }


  struct TokenContract {
    TokenType tokenType;
    address tokenAddress;
  }


  struct Token {
    TokenContract tokenContract;
    uint tokenId;
  }

  struct TokenValue {
    Token token;
    uint value;
  }
}
