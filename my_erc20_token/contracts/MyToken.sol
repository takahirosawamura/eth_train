pragma solidity ^0.4.18;
import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract MyToken is StandardToken {
  string public name = "MyToken";
  string public symbol = "MTKN";
  uint public decimals = 18;

  function MyToken(uint initialSupply) public {
    totalSupply = initialSupply;
    balances[msg.sender] = initialSupply;
  }
}
