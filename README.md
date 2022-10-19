## truffle-erc20-demo
使用 truffle 部署 erc-20 合约

在.env文件中配置发交易的助记词和infura
>INFURA_API_KEY = "https://goerli.infura.io/v3/xxxxx"
 
>MNEMONIC = "xxx xxx xxx ..."`

在 migrations/1_deploy_contract.js 中配置 toekn 的参数

run:
1. npm install
2. truffle compile
3. truffle migrate --network goerli

