# NewToken Smart Contract

This Solidity project deploys `NewToken`, a customizable ERC-20 token on the Ethereum blockchain. It demonstrates advanced features such as token minting, burning, and ownership management using OpenZeppelin's secure and community-vetted contracts. This project is designed for developers interested in creating their own tokens for various purposes such as digital currencies, governance tokens, or utility tokens.

## Description

The `NewToken` contract inherits from OpenZeppelin's `ERC20`, `ERC20Burnable`, and `Ownable` contracts. It allows the owner to mint new tokens and users to burn their tokens. The contract ensures secure token management and standard compliance with ERC-20 protocols, making it a robust foundation for any project requiring token creation capabilities.

## Getting Started

### Prerequisites

To deploy and interact with this smart contract, you need:
- Node.js and npm installed. Download from [Node.js](https://nodejs.org/).
- An Ethereum wallet with some ETH for deploying the contract (test ETH can be used on test networks).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Lukman-01/Avalanche-Eth-Avax.git
   cd Create-and-Mint-Token
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your `.env` file with your Alchemy API URL and private key:
   ```plaintext
   ALCHEMY_HTTP_URL="Your Alchemy API URL here"
   PRIVATE_KEY="Your Ethereum wallet private key here"
   ```

### Deploying the Contract

1. Compile the contract:
   ```bash
   npx hardhat compile
   ```

2. Deploy to the chosen network (e.g., Sepolia):
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

## Usage

After deploying, you can interact with the contract using Hardhat or integrate with frontend applications using libraries like ethers.js or web3.js. Here are some example interactions:

- Minting new tokens:
  ```javascript
  const contract = new ethers.Contract(contractAddress, ContractInterface, signer);
  await contract.mint(receiverAddress, amount);
  ```

- Burning tokens:
  ```javascript
  await contract.burn(amount);
  ```

## Authors

Abdulyekeen Lukman

## License

This project is licensed under the MIT License
```