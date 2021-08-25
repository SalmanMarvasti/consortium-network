
const PrivateKeyProvider = require("@truffle/hdwallet-provider");

// insert the private key of the account used in metamask eg: Account 1 (Miner Coinbase Account)
const privateKey = "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    qwallet: {
      provider: () => new PrivateKeyProvider(privateKey, "http://localhost:8545"),
      network_id: "*",
      type: "quorum",
      gasPrice: 0
    },
    memberone_ws:  {

      provider: () => new Web3.providers.WebsocketProvider("ws://localhost:8546", {
        headers: {
          origin: "127.0.0.1"
        }}),
          host: "127.0.0.1",
		      port: 20001,
		      network_id: "*", // Match any network id
		      gasPrice: 0,
		      gas: 4500000,
		      type: "quorum" // needed for Truffle to support Quorum
		    },
    memberone:  {

      provider: () => new PrivateKeyProvider(privateKey, "http://localhost:8545"),
	              host: "127.0.0.1",
		      port: 20000,
		      network_id: "*", // Match any network id
		      gasPrice: 0,
		      gas: 4500000,
		      type: "quorum" // needed for Truffle to support Quorum
		    },
    membertwo:  {

      provider: () => new PrivateKeyProvider(privateKey, "http://localhost:8545"),
	          host: "127.0.0.1",
	          port: 9082,
	          network_id: "*", // Match any network id
	          gasPrice: 0,
	          gas: 4500000,
	          type: "quorum" // needed for Truffle to support Quorum
		        },
     memberthree:  {
                       host: "127.0.0.1",
		       port: 20004,
		       network_id: "*", // Match any network id
		       gasPrice: 0,
		       gas: 4500000,
		       type: "quorum" // needed for Truffle to support Quorum
		    }
	  
  },
	//Configure your compilers
   compilers: {
     solc: {
	version: "0.8",    // Fetch exact version from solc-bin (default: truffle's version)

           }
   }

};
