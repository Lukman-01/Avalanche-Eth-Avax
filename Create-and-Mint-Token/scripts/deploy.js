
const main = async () => {
    const NewToken = await hre.ethers.getContractFactory("NewToken");
  
    const newToken = await NewToken.deploy();
  
    await newToken.deployed();
  
    console.log("Transactions are deployed to ", newToken.address);
  
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

//contract address: 0x8f72f4a3B75A3eF29f8B6d15703588c4EacbbBf8
  