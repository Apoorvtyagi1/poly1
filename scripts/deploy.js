const hre = require("hardhat");
const fs = require('fs');

async function main() {
  // Step 1: Get the contract factory for AbstractArt
  const AbstractArt = await hre.ethers.getContractFactory("AbstractArt");

  // Step 2: Deploy the contract
  const nft = await AbstractArt.deploy();

  // Step 3: Wait for the contract to be deployed
  await nft.deployed();

  // Step 4: Log the contract address after deployment
  console.log("AbstractArt contract has been deployed at address:", nft.address);

  // Step 5: Export the contract address to a file for future reference
  fs.writeFileSync('metadata/contractAddress.js', `
    export const nftAddress = "${nft.address}"
  `);
}

// Execute the deployment function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error deploying the AbstractArt contract:", error);
    process.exit(1);
});
