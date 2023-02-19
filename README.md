# VaultMask

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

<p align="center">
    <img src="https://github.com/MumukshTayal/ETHforAll-VaultMask/blob/main/vaultmask_logo-01.png" alt="VaultMask Logo">
</p>

`Vautlmask` is a user-friendly file storing & sharing solution that allows users to upload, store & share files in seconds and for free (applicable only if you store files with `Vaultsnap`). Besides, if you wish to store the files permanently, you can also do that at dearth cheap cost, thanks to FVM.

`SMART_CONTRACT_ADDRESS = '0x9e294e5Bde166200a968E67d0a9eEd975f2555AE'`.

## Table Of Contents

- [Quick Start](#quick-start)
- [Features](#features)
  - [Storage](#storage)
  - [Notifications](#notifications)
- [Workflow](#workflow)
- [Demo](#demo)
- [File Sharing](#file-sharing)
- [Future possibilities](#future-possibilities)

## Quick Start

Follow these steps to run the snap on your system:

- Clone the repo.
- Go to the Hardhat folder and add .env file. Export the private key from your Metamask Flask account and add it to the .env file. Following is an example:

`PRIVATE_KEY = '346ae509707f6a86ac266c7bab0f5831cdf5dd21b57d62b995b6641464c6e67e'`.

Attention: The information above is intended for illustration purposes only. Never disclose your private keys to anyone.

- In the Hardhat folder:

  - Run `yarn install`

- In the VaultMask folder:
  - Run `yarn install`
  - Run `yarn start`

`Note: To run this snap, you must be on the Hyperspace testnest and have some tFIL in your account.`

Go to the [Hyperspace testnet faucet](https://hyperspace.yoga/#faucet), and paste in your Ethereum address. This will send some hyperspace testnet FIL to the account.


## Features

### Storage

The primary function of vaultmask is storage. It has two kinds of storage option depending upon the user requirement:

**Snaps Storage** (`VaultSnap`)

- Personal data
- Upload upto 100 MB of data
- Retrieve data
- Ease of Access
- functions: `get, update, clear`

**Filecoin Storage**

- Data Storage
  - stored in smart contract
  - add address to share
- IPFS Protocol - Secure
- Store unlimited data
- Retrieve data
- functions: `add_record, get_record`

### Notifications

The secondary function of vaultmask is storage. It has two kinds of storage option depending upon the user requirement:

**Push Notifications**

- Push protocol
- Notify in snap
- Regular updates from subscribed channel
- functions: `push_notification`

**Custom Messages**

- Popup with custom text
- Transaction with confirmation texts
- User-friendly

## Workflow

![workflow](https://github.com/MumukshTayal/ETHforAll-VaultMask/blob/main/vautmask_flow.png)

- Snaps component: Vaultmask can store the data on snaps storage and get the data on demand. It also has a function to clear data.
- Filecoin storage component: Vaultmask uploads files to web3.storage and a cid hash is generated. It is later stored in smart contract with the filename and other transaction information. We can retrieve the file information and user related data using the methods present in smart contract.
- Push notifications are shown whenever a channel updates something. It uses push protocol.
- For improved user experience during the transactions, Vaultmask can show custom messages during pop ups and confirmations.

## Demo
![website](https://github.com/MumukshTayal/ETHforAll-VaultMask/blob/main/images/2.png)

## File Sharing
To perform file sharing:
- Upload the file and submit. It will load for a few moments before MetaMask pops up.
![upload and submit](https://github.com/MumukshTayal/ETHforAll-VaultMask/blob/main/images/1.png)
- As you can see, the file is added in table.
![table](https://github.com/MumukshTayal/ETHforAll-VaultMask/blob/main/images/3.png)
- Afterwads, enter the address of the account that you want the file to be shared with. Click on the file you want to share.
![sharing](https://github.com/MumukshTayal/ETHforAll-VaultMask/blob/main/images/4.png)

## Future possibilities

- VaultMask unlocks infinite future possibilities. Work for integrating file sync functionality is in progress. Metamask's snap are bound by the limitations of storing data locally on one device. This limits a user from accessing any of their files across devices (unless the user wishes to access a file that is stored on the Blockchain). VaultMask plans to solve this issue with the help of Push Protocol.

- Another feature that is planned to be added is the functionality to broadcast a file. This means anyone who wants to make a file open-to-all will be able to do so.

- A yet another planned update will be to make file sharing on payment stream basis. This shall allow content creators to start a revenue stream from their premium content.
