import { BrowserRouter as Router } from "react-router-dom";
import { MainContent } from "./components";
import GlobalStyles from "./Globalstyles";
import React, { useState, useEffect } from "react";

import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";
import BigNumber from "bignumber.js";
import FractionalizedNFTABI from "./abi/FractionalizedNFTABI.json";

const contractAddress = "0xf246Ee53756374ED3eFb597d7e39Fa26Ee0503Ad"; // change this contract address

const ERC20_DECIMALS = 18;

export async function buyNFT () {
  await window.celo.enable();
  const web3 = new Web3(window.celo);
  let kit = newKitFromWeb3(web3);
  const accounts = await kit.web3.eth.getAccounts();
  const user_address = accounts[0];
  const contract = new kit.web3.eth.Contract(FractionalizedNFTABI, contractAddress);
  let result = await contract.methods.purchase().send({from: user_address})
  console.log(result);
}
export async function redeemNFT () {
  let amount = document.getElementById('redeemNFTAmount').value;
  console.log(amount);
  await window.celo.enable();
  const web3 = new Web3(window.celo);
  let kit = newKitFromWeb3(web3);
  const accounts = await kit.web3.eth.getAccounts();
  const user_address = accounts[0];
  const contract = new kit.web3.eth.Contract(FractionalizedNFTABI, contractAddress);
  let result = await contract.methods.redeem(amount).send({from: user_address});
  console.log(result);
}

function App() {
  const [celoBalance, setCeloBalance] = useState(0);
  const [contract, setcontract] = useState(null);
  const [address, setAddress] = useState(null);
  const [kit, setKit] = useState(null);

  const connectCeloWallet = async () => {
    if (window.celo) {
      try {
        await window.celo.enable();
        const web3 = new Web3(window.celo);
        let kit = newKitFromWeb3(web3);

        const accounts = await kit.web3.eth.getAccounts();
        const user_address = accounts[0];

        kit.defaultAccount = user_address;

        await setAddress(user_address);
        console.log(user_address);

        await setKit(kit);

        // web3 events
        let options = {
          fromBlock: 0,
          address: ["0x18C242bC84905bb91ce89AD36fe07CddF52eb242"], //update the same contract address here
          topics: [], //What topics to subscribe to
        };

        let subscription = web3.eth.subscribe("logs", options, (err, event) => {
          if (!err) console.log(event);
        });

        subscription.on('data', event => {
          if (contract) {
          console.log('contract')
          }
        })


      } catch (error) {
        console.log("There is an error");
        console.log({ error });
      }
    } else {
      console.log("please install the extension");
    }
  };

  useEffect(() => {
    connectCeloWallet();
  }, []);

  useEffect(() => {
    if (kit && address) {
      return getBalance();
    } else {
      console.log("no kit or address");
    }
  }, [kit, address]);

  useEffect(() => {
    if (contract) {
      console.log(contract)
    }
  }, [contract]);

  const getBalance = async () => {
    const balance = await kit.getTotalBalance(address);
    const celoBalance = balance.CELO.shiftedBy(-ERC20_DECIMALS).toFixed(2);

    const contract = new kit.web3.eth.Contract(FractionalizedNFTABI, contractAddress);

    setcontract(contract);
    setCeloBalance(celoBalance);
  };

  return (
    <Router>
      <GlobalStyles />
      <MainContent
        celoBalance={celoBalance}
        address={address}
        connectCeloWallet={connectCeloWallet}
      />
    </Router>
  );
}

export default App;
