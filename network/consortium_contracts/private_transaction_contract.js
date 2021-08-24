//const Web3 = require('web3')
//const rpcURL = "https://node2.blockchain.azure.com:3200/<AccessKey>"
//const web3 = new Web3(rpcURL)
//const account = '<myAccount>'
const argv = require('minimist')(process.argv.slice(2), {string: ['bytecode', 'tx_id']});
const accountPassword = ''
member1TM = "BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo="
const contractByteCode = argv['bytecode'];

module.exports=(async (dx) => {
	let accounts = await web3.eth.getAccounts();
	console.log('your account node is :' + (accounts[0]));
	web3.eth.personal.unlockAccount(accounts[0], accountPassword, 60);
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
