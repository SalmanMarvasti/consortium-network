pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleStorage.sol";

contract TestSimpleStorage {
  function testInitialBalanceUsingDeployedContract() public {
    SimpleStorage meta = SimpleStorage(DeployedAddresses.SimpleStorage());

    uint expected = 19;

    Assert.equal(meta.get(), expected, "Owner should have 10000 SimpleStorage initially");
  }

  function testInitialBalanceWithNewSimpleStorage() public {
    uint expected = 19;

    SimpleStorage meta = new SimpleStorage(expected);
    Assert.equal(meta.get(), expected, "Owner should have 19 SimpleStorage initially");
  }
}
