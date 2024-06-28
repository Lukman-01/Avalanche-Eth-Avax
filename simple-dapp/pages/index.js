import { useState, useEffect } from "react";
import { ethers } from "ethers";
import simpleContractABI from "../artifacts/contracts/SimpleContract.sol/SimpleContract.json";

export default function HomePage() {
    const [ethWallet, setEthWallet] = useState(undefined);
    const [account, setAccount] = useState(undefined);
    const [simpleContract, setSimpleContract] = useState(undefined);
    const [count, setCount] = useState(undefined);
    const [userBalance, setUserBalance] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const contractAddress = "0x0B95b027eBe4aB451f1d6E4dE4D8e650aD74a229"; // Ensure this is the correct contract address

    useEffect(() => {
        if (window.ethereum) {
            connectWalletHandler();
        }
    }, []);

    useEffect(() => {
        if (simpleContract) {
            fetchCount();
        }
    }, [simpleContract]);

    const connectWalletHandler = async () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                accountChangedHandler(accounts[0]);
                setConnButtonText('Wallet Connected');
                setErrorMessage(''); 
            } catch (error) {
                if (error.code === 4001) { 
                    setErrorMessage("You have denied the account access. Please allow access to your account.");
                } else {
                    setErrorMessage(error.message);
                }
            }
        } else {
            setErrorMessage('Please install MetaMask browser extension to interact');
        }
    };

    const accountChangedHandler = newAccount => {
        setAccount(newAccount);
        getAccountBalance(newAccount);
        setupContract(newAccount);
    };

    const getAccountBalance = async (account) => {
        try {
            const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] });
            setUserBalance(ethers.utils.formatEther(balance));
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const setupContract = (account) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(account);
        const contract = new ethers.Contract(contractAddress, simpleContractABI.abi, signer);
        setSimpleContract(contract);
    };

    const fetchCount = async () => {
        if (simpleContract) {
            setIsLoading(true);
            try {
                const countFromContract = await simpleContract.count();
                setCount(countFromContract.toString());
            } catch (error) {
                console.error('Failed to fetch count:', error);
                setErrorMessage("Failed to fetch count: " + error.message);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const incrementCount = async () => {
        if (simpleContract) {
            setIsLoading(true);
            try {
                const tx = await simpleContract.increment(1);
                await tx.wait();
                fetchCount();
            } catch (error) {
                console.error('Failed to increment count:', error);
                setErrorMessage(error.message);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const decrementCount = async () => {
        if (simpleContract) {
            setIsLoading(true);
            try {
                const tx = await simpleContract.decrement(1);
                await tx.wait();
                fetchCount();
            } catch (error) {
                console.error('Failed to decrement count:', error);
                setErrorMessage(error.message);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="container mx-auto mt-10 text-center">
            <h1 className="text-3xl font-bold mb-4">Simple Contract Interaction</h1>
            <div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {!account ? (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={connectWalletHandler}
                    >
                        {connButtonText}
                    </button>
                ) : (
                    <div>
                        <p>Account: {account}</p>
                        <p>Balance: {userBalance} ETH</p>
                        <p>Count: {count}</p>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                <button
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
                                    onClick={incrementCount}
                                >
                                    Increment
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
                                    onClick={decrementCount}
                                >
                                    Decrement
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
