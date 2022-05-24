// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const Greeter = await ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");

  const VF = await ethers.getContractFactory('VotingFactory');
  const VotingPoll = await ethers.getContractFactory('VotingPoll');
  const vf= await VF.deploy();
  await VotingPoll.deploy("Prueba","0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199")
   await vf.deployed();

  console.log("VotingFactory deployed to:", vf.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});