var studentGrading = artifacts.require("./studentGrading.sol");

module.exports = function(deployer) {
  deployer.deploy(studentGrading);
};
