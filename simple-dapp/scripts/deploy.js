
const main = async () => {
  const SimpleContract = await hre.ethers.getContractFactory("SimpleContract");

  const simpleContract = await SimpleContract.deploy();

  await simpleContract.deployed();

  console.log("Transactions are deployed to ", simpleContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
