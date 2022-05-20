
/**
 * 
 * autogenerated by solidity-visual-auditor
 * 
 * execute with: 
 *  #> truffle test <path/to/this/test.js>
 * 
 * */
var dewed = artifacts.require("/home/dewed/nft-erc721-collection/smart-contract/contracts/YourNftToken.sol");

contract('dewed', (accounts) => {
    var creatorAddress = accounts[0];
    var firstOwnerAddress = accounts[1];
    var secondOwnerAddress = accounts[2];
    var externalAddress = accounts[3];
    var unprivilegedAddress = accounts[4]
    /* create named accounts for contract roles */

    before(async () => {
        /* before tests */
    })
    
    beforeEach(async () => {
        /* before each context */
    })

    it('should revert if ...', () => {
        return dewed.deployed()
            .then(instance => {
                return instance.publicOrExternalContractMethod(argument1, argument2, {from:externalAddress});
            })
            .then(result => {
                assert.fail();
            })
            .catch(error => {
                assert.notEqual(error.message, "assert.fail()", "Reason ...");
            });
        });

    context('testgroup - security tests - description...', () => {
        //deploy a new contract
        before(async () => {
            /* before tests */
            const newdewed =  await dewed.new()
        })
        

        beforeEach(async () => {
            /* before each tests */
        })

        

        it('fails on initialize ...', async () => {
            return assertRevert(async () => {
                await newdewed.initialize()
            })
        })

        it('checks if method returns true', async () => {
            assert.isTrue(await newdewed.thisMethodShouldReturnTrue())
        })
    })
});
