var ACLStorage = artifacts.require("AccessControlled_ERC721");
const argv = require('minimist')(process.argv.slice(2), {string: ['set_data', 'id_id', 'address']});
member1TM = "BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=" // can be obtained from tessera
addressTo = "0xaB8F28Ec55f069Dd4Ca07E8396BE6eC8E339C04D" // metamask account
addressTwo = "0x6410E8e6321f46B7A34B9Ea9649a4c84563d8045"

addressTo = argv['address']
if (addressTo.length<2)
	addressTo = addressTwo
module.exports = function(done) {
	  console.log("Getting deployed version of ACL contract...")
	  ACLStorage.deployed().then(function(instance) {
		      console.log("Setting token id "+argv['id_id'] +"value to "+argv['set_data']);
		      return instance.mintAndSetURI(addressTwo, argv['set_data']);
		    }).then(function(result) {
			        console.log("Transaction:", result.tx);
					web3.eth.getTransactionReceipt(result.tx).then(function(data){
						let transaction = data;
						let logs = data.logs;
						console.log(logs);
						console.log("the uid of the stored token and message is:" + web3.utils.hexToNumber(logs[0].topics[3]));
					});
			        console.log("Finished!"+result);
			        done();
			      }).catch(function(e) {
				          console.log(e);
				          done();
				        });
	
	
};
