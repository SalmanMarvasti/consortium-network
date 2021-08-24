var NftItem = artifacts.require("NftItem");

module.exports = function(deployer) {
  deployer.deploy(NftItem, "NFY", "NFT");
};
