pragma solidity 0.5.11;

import "zk-circuits/build/Verifier.sol";
import "./SafeRemotePurchase.sol";

contract ZkIdentity is SafeRemotePurchase {
    address public owner;
    address public receiver;


    constructor() public {
        owner = msg.sender;
    }

    function isInGroup(
       
    ) public view returns (bool) {
    if (owner == buyer ) 
        {
            revert("Supplier data present in Smart Contract");
        }
    else if(receiver == seller ) {
             revert("Producer data present in Smart Contract");

        }
    
 

        return verifyProof(a, b, c, input);
    }
}
