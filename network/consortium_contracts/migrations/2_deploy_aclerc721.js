var NftItem = artifacts.require("AccessControlled_ERC721");

module.exports = function(deployer) {
  deployer.deploy(NftItem, "ACLFNFT", "ACLNFT", "");
};
