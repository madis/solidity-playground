const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const SharedStructs = artifacts.require("SharedStructs");
const Job = artifacts.require("Job");
const JobMarket = artifacts.require("JobMarket");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.deploy(SharedStructs);
  deployer.deploy(Job);
  deployer.deploy(JobMarket);
  deployer.link(SharedStructs, Job);
  deployer.link(SharedStructs, JobMarket);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
};
