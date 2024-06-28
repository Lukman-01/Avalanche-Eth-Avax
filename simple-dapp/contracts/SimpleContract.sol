// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    uint public count = 0;

    // Function to increase the count by a given value
    function increment(uint value) public {
        count += value;
    }

    // Function to decrease the count by a given value
    function decrement(uint value) public {
        require(count >= value, "Decrement would underflow!");
        count -= value;
    }

    // Explicit getter function for count
    function getCount() public view returns (uint) {
        return count;
    }
}
