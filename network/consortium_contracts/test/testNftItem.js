const { expect, assert } = require('chai')
var NftErc721 = artifacts.require("NftItem")

var NftErc721 = NftErc721
contract('Testing ERC721 contract', function(accounts) {

	    let token;
	    const name = "QuantCat";
	    const symbol = "BCat"
	    console.log(accounts[1])

	    const account1 = accounts[1]
	    const tokenId1 = 1111;
	    const tokenUri1 = "This is data for the token 1"; // Does not have to be unique

	    const account2 = accounts[2]
	    const tokenId2 = 2222;
	    const tokenUri2 = "This is data for the token 2"; // Does not have to be unique

	    const account3 = accounts[3]
	    console.log(account3)
	    it(' should be able to deploy and mint ERC721 token', async () => {
		            token = await NftErc721.new(name, symbol)
		            await token.mintNewTokenTo(account1, tokenId1, tokenUri1, {from: accounts[0]})

		            expect(await token.symbol()).to.equal(symbol)
		            expect(await token.name()).to.equal(name)
		        })

	    it(' should be unique', async () => {
		            const duplicateTokenID = token.mintNewTokenTo(account2, tokenId1, tokenUri2, {from: accounts[0]}) //tokenId
	//	            expect(duplicateTokenID).to.be.rejectedWith(/VM Exception while processing transaction: revert/)
		        })

	    it(' should allow creation of multiple unique tokens and manage ownership', async () => {
		            const additionalToken = await token.mintNewTokenTo(account2, tokenId2, tokenUri2, {from: accounts[0]})
		            expect(Number(await token.totalSupply())).to.equal(2)

		            expect(await token.exists(tokenId1)).to.be.true
		            expect(await token.exists(tokenId2)).to.be.true
		            expect(await token.exists(9999)).to.be.false // Dummy tokenId

		            expect(await token.ownerOf(tokenId1)).to.equal(account1)
		            expect(await token.ownerOf(tokenId2)).to.equal(account2)
		        })
})
