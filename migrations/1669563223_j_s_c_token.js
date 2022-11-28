const JSCToken = artifacts.require("JSCToken");

module.exports = function (deployer) {
  deployer.deploy(JSCToken);
};