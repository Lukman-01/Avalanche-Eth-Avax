const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ErrorHandling Contract", function () {
    let errorHandling;
    let owner;

    // Deploy the contract before each test
    beforeEach(async function () {
        // Get the ContractFactory and Signers here.
        const ErrorHandling = await ethers.getContractFactory("ErrorHandling");
        [owner] = await ethers.getSigners();

        // Deploy a new contract instance before each test.
        errorHandling = await ErrorHandling.deploy();
        await errorHandling.deployed();
    });

    // Test case for initial state of number
    it("should start with a number of 0", async function () {
        expect(await errorHandling.number()).to.equal(0);
    });

    // Test case for setting the number successfully
    it("should allow setting the number if it's greater than 10", async function () {
        await errorHandling.setNumber(20);
        expect(await errorHandling.number()).to.equal(20);
    });

    // Test case for failing to set the number when it's not greater than 10
    it("should fail to set the number if it's not greater than 10", async function () {
        await expect(errorHandling.setNumber(10)).to.be.revertedWith("Number must be greater than 10");
    });

    // Test case for decreasing the number successfully
    it("should allow decreasing the number if decrement is less than current number", async function () {
        await errorHandling.setNumber(20);
        await errorHandling.decreaseNumber(5);
        expect(await errorHandling.number()).to.equal(15);
    });

    // Test case for failing to decrease the number when decrement is more than current number
    it("should fail to decrease the number if decrement is more than current number", async function () {
        await errorHandling.setNumber(10);
        await expect(errorHandling.decreaseNumber(20)).to.be.revertedWith("Decrement cannot be more than the current number");
    });

    // Test case to ensure validateNumber function works properly when number is not zero
    it("should pass validation if number is not zero", async function () {
        await errorHandling.setNumber(20);
        await expect(errorHandling.validateNumber()).to.not.be.reverted;
    });

    // Test case for validateNumber function failing when number is zero
    it("should fail validation if number is zero", async function () {
        // Since the default number is 0, the validateNumber should fail
        await expect(errorHandling.validateNumber()).to.be.reverted;
    });
});
