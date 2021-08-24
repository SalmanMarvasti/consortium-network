var ACLStorage = artifacts.require("AccessControlled_ERC721");
const argv = require('minimist')(process.argv.slice(2), {string: ['set_value', 'uid']});
member1TM = "BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo="
myAddress = "0xaB8F28Ec55f069Dd4Ca07E8396BE6eC8E339C04D" // metamask account
addressTwo = "0x6410E8e6321f46B7A34B9Ea9649a4c84563d8045"
uidStoredMessage = argv['uid']
module.exports = function(done) {
	  console.log("Getting deployed version of ACL contract...")
	  ACLStorage.deployed().then(function(instance) {
		      console.log("Setting token id "+ uidStoredMessage +"value to "+argv['set_value']);
		      return instance.tokenURI(web3.utils.toBN(uidStoredMessage));
		    }).then(function(result) {
			        console.log("Result:" + result);
			        done();
			      }).catch(function(e) {
				          console.log(e);
				          done();
				        });
};
