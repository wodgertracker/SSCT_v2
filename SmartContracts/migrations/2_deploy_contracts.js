
const Inventory = artifacts.require("InventoryMarket");

module.exports = async (deployer) => {

  await deployer.deploy(Inventory);

  const contract = await Inventory.deployed(); 
  console.log(`Contract has been deployed successfully: ${contract.address}`);
  
};


