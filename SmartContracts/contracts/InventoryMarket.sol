
pragma solidity ^0.6.0;

/*
Those functions and state variables can only be accessed internally
(i.e. from within the current contract or contracts deriving from it), without using this.
*/


import "./HitchensUnorderedKeySet.sol";
import "./SafeRemotePurchase.sol";
import "./Ownable.sol";

contract InventoryMarket is Ownable {

    using HitchensUnorderedKeySetLib for HitchensUnorderedKeySetLib.Set;
        HitchensUnorderedKeySetLib.Set private widgetSet;

    string public contractName;

    struct WidgetStruct {
        // pointer on the child contract
        address purchaseContract;
    }

    mapping(bytes32 => WidgetStruct) private widgets;

    constructor() public {
        contractName = "Inventory Management Smart Contract";
    }

    event LogCreatePurchaseContract(address sender, bytes32 key, address contractAddress);
    event LogRemovePurchaseContract(address sender, bytes32 key);


 
    function createPurchaseContract(bytes32 key, string calldata description, string calldata ipfsImageHash,
        uint256 quantity) external payable returns(bool createResult) {

        widgetSet.insert(key); // Note that this will fail automatically if the key already exists.
        WidgetStruct storage wgt = widgets[key];
		/*
		  When a new contract is created with the 'new' keyword, for example
		     Token token = new Token;

          This line fires a transaction which deploys the child Token contract
          and returns the address for that contract.
          In Solidity contracts are directly convertible to addresses.
          The newer compiler wants to see that explicitly, like return address(token);
		*/

        // msg.sender would be the seller
        SafeRemotePurchase c = (new SafeRemotePurchase).value(msg.value)(commissionRate, msg.sender, key, description, ipfsImageHash);


       
        c.transferOwnership(owner());


        // cast contract pointer to address
        address newContract = address(c);
        wgt.purchaseContract = newContract;

        emit LogCreatePurchaseContract(msg.sender, key, newContract);

        return true;
    }

    function getContractCount() public view returns(uint contractCount) {
        return widgetSet.count();
    }

    function getContractKeyAtIndex(uint index) external view returns(bytes32 key) {
        return widgetSet.keyAtIndex(index);
    }

    function getContractByKey(bytes32 key) external view returns(address contractAddress) {
        require(widgetSet.exists(key), "Can't get a widget that doesn't exist.");
        WidgetStruct storage w = widgets[key];
        return (w.purchaseContract);
    }

    function removeContractByKey(bytes32 key) external onlyOwner returns(bool result) {
        // Note that this will fail automatically if the key doesn't exist
        widgetSet.remove(key);
        delete widgets[key];
        emit LogRemovePurchaseContract(msg.sender, key);
        return true;
    }

}
