var ACLStorage = artifacts.require("AccessControlled_ERC721");
const argv = require('minimist')(process.argv.slice(2), {string: ['set_value', 'tx_id']});
member1TM = "BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo="
addressTo = "0xaB8F28Ec55f069Dd4Ca07E8396BE6eC8E339C04D" // metamask account
addressTwo = "0x6410E8e6321f46B7A34B9Ea9649a4c84563d8045"
web3.eth.getTransactionReceipt(argv['tx_id']).then(function(data){
    let transaction = data;
    let logs = data.logs;
    console.log(logs);
    console.log("the uid of the stored token and message is:" + web3.utils.hexToNumber(logs[0].topics[3]));
});
module.exports = function(done) {
	  console.log("Getting...")
      web3.eth.getTransactionReceipt(argv['tx_id']).then(function(data){
        let transaction = data;
        let logs = data.logs;
        console.log(logs);
        console.log("the uid of the stored token and message is:" + web3.utils.hexToNumber(logs[0].topics[3]));
        done();
    });
	
	
};
