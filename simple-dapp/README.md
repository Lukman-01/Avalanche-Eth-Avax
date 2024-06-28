# Simple Contract Interaction

This project demonstrates the basic functionality of interacting with a Solidity smart contract through a React application using ethers.js. The smart contract allows incrementing and decrementing a counter stored on the Ethereum blockchain.

## Description

The smart contract, `SimpleContract`, is developed in Solidity, a programming language for creating smart contracts on the Ethereum blockchain. The contract includes functions to increment and decrement a count, as well as to retrieve the current count. The React frontend provides a user-friendly interface to connect an Ethereum wallet, interact with the contract, and display the count and user's wallet balance.

## Getting Started

### Dependencies

- Node.js and npm
- MetaMask browser extension installed and set up

### Installing

1. Clone the repository:
   ```bash
   git clone https://github.com/Lukman-01/Avalanche-Eth-Avax.git
   ```
2. Install the required npm packages:
   ```bash
   cd simple-dapp
   npm install
   ```

### Executing program

1. Start the local development server:
   ```bash
   npm start
   ```
2. Open your web browser and navigate to `http://localhost:3000`.
3. Connect your MetaMask wallet using the "Connect Wallet" button on the page.
4. Interact with the contract by clicking the "Increment" and "Decrement" buttons to change the count stored on the blockchain.

### Smart Contract Deployment

To deploy the `SimpleContract` to an Ethereum test network (e.g., Rinkeby or Sepolia), follow these steps:

1. Set up your `.env` file with your Alchemy API URL and private key:
   ```plaintext
   ALCHEMY_HTTP_URL="Your Alchemy API URL here"
   PRIVATE_KEY="Your Ethereum wallet private key here"
   ```
2. Run the deployment script:
   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network sepolia
   ```
3. Note the contract address output by the script and ensure it is correctly set in your React application.

## Authors

Abdulyekeen Lukman

## License

This project is licensed under the MIT License
```