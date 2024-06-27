# ErrorHandling Contract

This repository contains a Solidity smart contract designed for basic error handling demonstrations using `require`, `revert`, and `assert`. The contract is ideal for learning how to implement control structures in Solidity for managing errors and maintaining contract state integrity.

## Description

The `ErrorHandling` contract showcases three different ways to handle errors and ensure conditions in Solidity smart contracts:
- `require()` is used to validate inputs and conditions before executing actions.
- `revert()` is explicitly called to handle errors.
- `assert()` is used for checking invariants and conditions that should always be true.

The contract is a useful tool for developers looking to understand error handling in Solidity.

## Getting Started

### Installing

To get started with the `ErrorHandling` contract, clone this repository to your local machine using Git:

```bash
git clone https://github.com/Lukman-01/Avalanche-Eth-Avax/Error-Handling.git
```

Ensure that you have [Node.js](https://nodejs.org/) and [npm](https://npmjs.com/) installed. Navigate into the project directory and install dependencies:

```bash
cd Error-Handling
npm install
```

### Executing program using Hardhat

To run and test the smart contract, follow these steps:

1. Compile the contract:
   ```
   npx hardhat compile
   ```

2. Run tests to ensure the contract behaves as expected:
   ```
   npx hardhat test
   ```

3. Deploy the contract to a test network (optional):
   ```
   npx hardhat run scripts/deploy.js --network ropsten
   ```

## Authors

- Abdulyekeen Lukman 

## License

This project is licensed under the MIT License
```