// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = hre.ethers.parseEther("0.001");

//   const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   await lock.waitForDeployment();

//   console.log(
//     `Lock with ${ethers.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
//   );
// }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

const hre = require("hardhat");

// console.log(hre);

async function main(){
  const currentTimeStampSecond = Math.round(Date.now()/ 1000);
  const ONE_YEAR_IN_SECOND = 356 * 24* 60* 60;
  const ulockTimeStamp = currentTimeStampSecond + ONE_YEAR_IN_SECOND;

  console.log(currentTimeStampSecond);
  console.log(ONE_YEAR_IN_SECOND);
  console.log(ulockTimeStamp);




}
main().catch((error)=>{
  console.log(error);
})
