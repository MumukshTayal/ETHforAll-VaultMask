# VaultMask
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
<p align="center">
    <img src="https://github.com/MumukshTayal/Inter-IIT-Project_files/blob/add_file_ethereum/vaultmask_logo-01.png" alt="VaultMask Logo">
</p>

```Vautlmask``` is an extension of metamask that focusses on **decentralized** storage and improving the **user experience**.

## Table Of Contents
- [Features](#features)
    - [Storage](#storage)
    - [Notifications](#notifications)
- [Workflow](#workflow)
- [Future possibilities](#future-possibilities)
- [Steps to Run](#steps-to-run)

## Features

### Storage

The primary function of vaultmask is storage. It has two kinds of storage option depending upon the user requirement:

**Snaps Storage**

- Personal data
- Upload upto 100 MB of data
- Retrieve data
- Ease of Access
- functions: ```get, update, clear```

**Filecoin Storage**

- Data Storage
  - stored in smart contract
  - add address to share
- IPFS Protocol - Secure
- Store unlimited data
- Retrieve data
- functions: ```add_record, get_record```

### Notifications

The secondary function of vaultmask is storage. It has two kinds of storage option depending upon the user requirement:

**Push Notifications**

- Push protocol
- Notify in snap
- Regular updates from subscribed channel
- functions: ```push_notification```

**Custom Messages**

- Popup with custom text
- Transaction with confirmation texts
- User-friendly

## Workflow
![workflow](https://github.com/MumukshTayal/Inter-IIT-Project_files/blob/add_file_ethereum/vautmask_flow.png)
- Snaps component: Vaultmask can store the data on snaps storage and get the data on demand. It also has a function to clear data.
- Filecoin storage component: Vaultmask uploads files to web3.storage and a cid hash is generated. It is later stored in smart contract with the filename and other transaction information. We can retrieve the file information and user related data using the methods present in smart contract.
- Push notifications are shown whenever a channel updates something. It uses push protocol.
- For improved user experience during the transactions, Vaultmask can show custom messages during pop ups and confirmations.

## Future possibilities
The future possibilities of a general purpose storage snap like this is limitless. It can be used in decentralized data marketplaces, improved data management and decentralized data analytics. We believe in the vast potential of vaultmask and will be exploring new features and possibilities in future. 

 ## Steps to Run
 Follow these steps to run the snap on your system:
 
 - Clone the repo and switch to add_file_ethereum branch
 - Go to the Hardhat folder and add .env file. Export the private key from your Metamask Flask account and add it to the .env file. Following is an example:
 
 ```PRIVATE_KEY = '93890b27049e34dc1c9b954d76c8c366b9aa4349b46bc33391e2bdcb8348ac86'```.
 
 Attention: The information above is intended for illustration purposes only. Never disclose your private keys to anyone.
 
 - In the Hardhat folder:
 - Run ``` yarn install ```
 - Run ``` npx hardhat compile ```
 - Run ``` npx hardhat deploy --network hyperspace ```
 
 - Now, copy the deployed smart contract address from the previous step.
 - Go to SnapLoad\packages\site\src\pages\index.tsx and replace the old contract addresses with the new one. Smart contract address is of the following format (an example) : ```0x7A61E2254c6Fd8A797482865Ae48eE05Beb63cDb```.
 
 - In the SnapLoad folder:
 - Delete the MarketAPI.json.
 - Copy the Market API Json file from Hardhat\deployments\hyperspace\MarketAPI.json to SnapLoad\packages\site\src\components\MarketAPI.json
 - Run ```yarn install```
 - Run ```yarn start```
