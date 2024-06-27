// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ErrorHandling {
    // Variable to store number
    uint256 public number;

    // Function to set the number
    // Uses require to ensure the number is greater than 10
    function setNumber(uint256 _number) public {
        require(_number > 10, "Number must be greater than 10");
        number = _number;
    }

    // Function to decrease the number
    // Uses revert explicitly for a specific condition
    function decreaseNumber(uint256 _decrement) public {
        if (_decrement > number) {
            revert("Decrement cannot be more than the current number");
        }
        number -= _decrement;
    }

    // Function to validate the current number
    // Uses assert to ensure number has not reached zero
    function validateNumber() public view {
        assert(number != 0);
    }
}
