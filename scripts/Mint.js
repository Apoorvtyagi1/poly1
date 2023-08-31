const { ethers } = require("hardhat");
require("dotenv").config();

async function mintNFTs() {
  // Replace with the contract address of your AbstractArt NFT
  const nftAddress = "0x973bce79732fc1A61bA27a8117664C6d7398c1CF"; 

  // Get the contract instance
  const contract = await ethers.getContractAt("AbstractArt", nftAddress);

  // Replace with the address where you want to mint the NFTs
  const accountAddress = "0xb12F4664A25AF8b5eCe76dACCB74d2379383CB74";

  // Metadata URIs for each NFT
  const metadataURIs = [
    "https://gateway.pinata.cloud/ipfs/QmdTNAuJmYeMAbizNzTJdfEbvCtf9wN4dF8G5pGmc1koCw?filename=1.json",
    "https://gateway.pinata.cloud/ipfs/QmQoJVj5zji82msuK5WnLfRAA4aLyJAX9Fa7efAW6DiLhx?filename=2.json",
    "https://gateway.pinata.cloud/ipfs/QmPLusycN3kxS9MWJWnuHjh8oJRrb3haynF9JwKC4GDsJa?filename=3.json",
    "https://gateway.pinata.cloud/ipfs/QmUpFcTQSCjk5PHjvTyQ6DZQ5cogvdELKpRqVJ8hYm35Lo?filename=4.json",
    "https://gateway.pinata.cloud/ipfs/QmTVHCUftqaW1qr4APhCmeGZxCqys21vyYo11WHWpnAt7x?filename=5.json"
  ];

  const numNFTs = 5; // Number of NFTs to mint

  console.log("=== Starting NFT Minting Process ===");

  for (let i = 0; i < numNFTs; i++) {
    const metadataURI = metadataURIs[i];
    console.log(`Minting NFT #${i + 1} with metadata URI: ${metadataURI}`);

    try {
      // Call the contract's mint function
      const transaction = await contract.mint(accountAddress, metadataURI);
      await transaction.wait();

      console.log(`✓ NFT #${i + 1} successfully minted!`);
    } catch (error) {
      console.error(`❌ Error minting NFT #${i + 1}:`, error.message);
    }
  }

  console.log("=== Minting process complete! ===");
}

mintNFTs()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error in mintNFTs function:", error.message);
    process.exit(1);
  });
