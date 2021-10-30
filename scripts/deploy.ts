import { ethers } from "hardhat";

// Assets by https://luizmelo.itch.io/
const main = async () => {
  const gameContractFactory = await ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["CycloBat", "Monsroom", "Goblin"], // Names
    ["https://i.imgur.com/IX1KPel.png", // Images
    "https://i.imgur.com/8Pj3O5p.png", 
    "https://i.imgur.com/9IFCVbm.png"],
    [100, 200, 300],                    // HP values
    [10, 25, 25],                       // Defense
    [3, 3, 6],                          // CritialHitAt
    [20, 45, 50],                      // Attack damage values
    "Skeleton",                         // Boss name
    "https://i.imgur.com/n2jA3FH.png",  // Boss image
    1000,                               // Boss hp
    50,                                 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  
  // Although _safeMint assigns the token with the caller, there is no way in the game to access multiple NFTs
  // to attack the boss since the mint function overwrittes the mapping (address => uint), thats why on OpenSea we
  // see the token assigned to the walet, yet unusable in the game (but the last mint).
  
  /* let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Done!");

  console.log("Done deploying and minting!"); */
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();