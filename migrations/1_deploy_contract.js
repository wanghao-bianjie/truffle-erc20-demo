const Demo_Contract = artifacts.require("Metacrypt_B_TR_MB_X");

module.exports = function (deployer) {
    // deployer.deploy(Demo_Contract, "0x5fbca2ed2040924f65133A25194eeEBd45864f24", "My Mock USDC", "USDC", 6, 100000000000, 100000000000);
    deployer.deploy(Demo_Contract, "0x5fbca2ed2040924f65133A25194eeEBd45864f24", "My Mock USDT", "USDT", 6, 1000000000000000, 1000000000000000);
};