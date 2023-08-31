# AbstractArt - ERC721 NFT Contract

This project provides a simple ERC-721 compliant smart contract to create and manage non-fungible tokens (NFTs) on the Polygon blockchain. Users can generate new NFTs, set their metadata (URI), and check the overall supply and balance of NFTs.

## Getting Started

### Prerequisites

Before installation, ensure you have the following prerequisites:

- Node.js (version 12.0.0 or higher)
- npm (version 6.0.0 or higher)
- Hardhat (version 2.0.0 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install the necessary dependencies:

```bash
npm install
```

## Deployment

Before deploying the ERC721 contract, provide your wallet private key where required, i.e., `PRIVATE_KEY= 'your wallet private key'`. To deploy the ERC721 contract named "AbstractArt" to the Goerli Ethereum Testnet, run the following command:

```bash
npx hardhat run scripts/deploy.js --network goerli
```

_Note: After deploying, copy the generated address into `contractAddress.js` (stored in the metadata folder) and `batchMint.js` (stored in the scripts folder)._

## Batch Mint NFTs

This command will mint the NFTs:

```bash
npx hardhat run scripts/Mint.js --network goerli
```

## Approve and Deposit NFTs to Polygon Mumbai

This command will use the FxPortal Bridge to approve and deposit the minted NFTs from Ethereum to the Polygon Mumbai network.

```bash
npx hardhat run scripts/Transfer.js --goerli
```

## Check NFT Wallet Balance

To check the balance of the NFT wallet on the Polygon Mumbai network, run the following command:

```bash
npx hardhat run checkBalance.js --network mumbai
```

## Features

The contract offers the following functionalities:

1. `mintNFT(address recipient, string memory tokenURI)`: Create a new NFT with the specified metadata URI and assign it to the provided recipient address.

2. `tokenURI(uint256 tokenId)`: Retrieve the metadata URI associated with a specific NFT token ID.

3. `totalSupply()`: Obtain the total number of NFTs minted so far.

4. `balanceOf(address owner)`: Get the number of NFTs owned by a particular address.

5. `promptDescription()`: A function on the contract that returns the prompt used to generate the images for the NFTs.

## Author
[Saksham Kanwar](https://github.com/01saksham)

## License

This project is licensed under the MIT License. You can make a copy of the project to use for your own purposes.
