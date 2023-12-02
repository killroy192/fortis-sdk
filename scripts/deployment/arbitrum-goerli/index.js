const hre = require("hardhat");
const deploy = require("../deploy");
const config = require("./config");

async function main() {
  const lock = await deploy(config);

  const routerContract = await hre.ethers.getContractAt(
    "MockOracleRouter",
    lock.MockOracleRouter.addr,
  );

  const currentImplementation = await routerContract.implementation();
  const newImplementation = lock.MockOracle.addr;
  if (currentImplementation !== newImplementation) {
    console.log("start automatic migration");
    await routerContract.upgradeTo(newImplementation);
    const linkToken = await hre.ethers.getContractAt(
      "IERC20",
      "0xd14838A68E8AFBAdE5efb411d5871ea0011AFd28",
    );
    console.log("done");
    // need to fund contract under router
    console.log("fund new oracle");
    await linkToken.transfer(newImplementation, hre.ethers.parseEther("0.1"));
    const currentImplementation = await routerContract.implementation();
    console.log(
      `trigger test event for ${lock.MockOracleRouter.addr} -> ${currentImplementation}`,
    );
    const consumer = await hre.ethers.getContractAt(
      "MockConsumer",
      lock.MockConsumer.addr,
    );

    await consumer.trigger(
      {
        tokenIn: hre.ethers.ZeroAddress,
        tokenOut: hre.ethers.ZeroAddress,
        amountIn: hre.ethers.parseEther("10"),
      },
      Math.ceil(Math.random() * 100),
    );
  }

  console.log("done");
}

main();
