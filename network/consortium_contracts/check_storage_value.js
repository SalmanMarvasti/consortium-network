//var contract = require("@truffle/contract");
var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(done) {
	  console.log("Getting deployed version of SimpleStorage...")
	  SimpleStorage.deployed().then(function(instance) {
		      return instance.get();}).then(function(result) {
			                                      console.log("Finished!", result);
			                                      done();
			                                    }).catch(function(e) {
								                                              console.log(e);
								                                              done();
								                                            })
}
