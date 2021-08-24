var SimpleStorage = artifacts.require("SimpleStorage");
const argv = require('minimist')(process.argv.slice(2), {string: ['set_value']});

module.exports = function(done) {
	  console.log("Getting deployed version of SimpleStorage...")
	  SimpleStorage.deployed().then(function(instance) {
		      console.log("Setting value to 5x..");
		      return instance.set(argv['set_value'], {privateFor: ["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo="], gas: 900000, gasPrice: 0});
		    }).then(function(result) {
			        console.log("Transaction:", result.tx);
			        console.log("Finished!");
			        done();
			      }).catch(function(e) {
				          console.log(e);
				          done();
				        });
};
