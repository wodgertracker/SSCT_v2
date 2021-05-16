pragma solidity 0.5.11;

import "./Verifier.sol";
import "./SafeRemotePurchase.sol";

contract ZkIdentity is SafeRemotePurchase {
    address public owner;
    address public receiver;


    constructor() public {
        owner  = msg.sender;
        receiver=msg.data;
    }

    function isInGroup(

    ) public view returns (bool) {
        //Owner values equate to buyer reverts back the fact that supplier data is present in the smart contract
    if (owner == buyer )
        {
            revert("Supplier data present in Smart Contract");
        }
        //Receiver values equate to seller  reverts back the fact that supplier data is present in the smart contract

    else if(receiver == seller ) {
             revert("Producer data present in Smart Contract");

        }



        return verifyProof(a, b, c, input);
    }
}
