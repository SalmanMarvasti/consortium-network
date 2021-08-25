var ACLStorage = artifacts.require("AccessControlled_ERC721");
const argv = require('minimist')(process.argv.slice(2), {string: ['my_address', 'tx_id']});
member1TM = "BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo="
addressTo = "0xaB8F28Ec55f069Dd4Ca07E8396BE6eC8E339C04D" // metamask account
addressTwo = "0x6410E8e6321f46B7A34B9Ea9649a4c84563d8045" // comes from accounts

module.exports=(async (dx) => {
	let accounts = await web3.eth.getAccounts();
	console.log('your account node is :' + (accounts[0]));
    
      
n = await web3.eth.getBlockNumber() // the 'latest' block
console.log("Getting..."+n)
txs = []
var subscription = web3.eth.subscribe('logs', {
    address: accounts[0]
//    ,topics: ['0x12345...']
}, function(error, result){
    if (!error)
        console.log(result);
});
// for (var i = n-10; i < n; i++) {
//     console.log('i'+i)
//     let block = await eth.getBlock(i);
//     console.log('looking at block:'+block)
//     for (var j = 0; j < block.transactions.length; j++) {
//         console.log(block.transactions[j].to)
//         if (block.transactions[j].to === addressTo) {
//             txs.push(block.transactions[j]);
//         }
//     }
// }
if (txs.length>0){
      web3.eth.getTransactionReceipt(txs[0]).then(function(data){
        let transaction = data;
        let logs = data.logs;
        console.log(logs);
        console.log("the uid of the stored token and message is:" + web3.utils.hexToNumber(logs[0].topics[3]));
        done();
    });
}
	//web3.eth.personal.unlockAccount(accounts[0], accountPassword, 60);
	let account = accounts[0]
	await web3.eth.getTransactionCount(account, (err, txCount) => {
	    if (err!=null) {console.log('error executing web3.eth.getTransactionCount: ', err)}
	    else{
		            console.log('txCount: ',txCount)

		            const txObject = {
				                from: account,
				                nonce: web3.utils.toHex(txCount),
				                gas: web3.utils.toHex(3000000),
				                gasPrice: web3.utils.toHex(web3.utils.toWei('0', 'gWei')),
				                data: contractByteCode,
				                privateFor: [member1TM]
				            }

		            // await web3.eth.sendTransaction(txObject, function(err, transactionHash) {
					// 	if (!err)
					// 	  console.log(transactionHash);
					  
					// 	var receipt = web3.eth.getTransactionReceipt(transactionHash);
					// 	console.log(receipt)
					//   });
		        }

})



	dx();
	});

