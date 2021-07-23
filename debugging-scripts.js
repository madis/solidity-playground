jm = await JobMarket.deployed();
mc = await MetaCoin.deployed();
let jobParam = {value: 1, token: {tokenId: 2, tokenContract: {tokenAddress: mc.address, tokenType: 1}}};
let job = await Job.deployed();
zeJ = await jm.createJob(job.address, [jobParam]);
zeA = jm.simpleAnswer(11);
