jm = await JobMarket.deployed()
let jobParams = {value: 1, token: {tokenId: 2, tokenContract: {tokenAddress: "0x24eef3f44f801e1FD03C12480BEff9b60A47a1eb", tokenType: 1}}};
zeJ = await jm.createJob("0xA9f631D604e59eBf0e1Df7de282c604817951d48", jobParams);
zeA = jm.simpleAnswer(11)
