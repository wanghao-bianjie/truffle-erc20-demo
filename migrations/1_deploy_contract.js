const Demo_Contract = artifacts.require("Metacrypt_B_TR_MB_X");

module.exports = function (deployer) {
    let targetAddr = "0x5fbca2ed2040924f65133A25194eeEBd45864f24"
    let name = "My Mock USDC"
    let symbol = "USDC"
    let decimals = 6
    let cap = 1000000000000000 //1000000000USDT
    let initial = 1000000000000000 //1000000000USDT

    deployer.deploy(Demo_Contract, targetAddr, name, symbol, decimals, cap, initial);
    // deployer.deploy(Demo_Contract, "0x5fbca2ed2040924f65133A25194eeEBd45864f24", "My Mock USDC", "USDC", 6, 100000000000, 100000000000);
};