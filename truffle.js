// const path = require('path');
// const wallet = require(path.resolve( __dirname, "private.js" ));
// const HDWalletProvider = require("truffle-hdwallet-provider");

// if (!process.env.SOLIDITY_COVERAGE){
// This is a stub to use in case you begin validating on a testnet using HDWallet.
// HDWallet interferes with the coverage runner so it needs to be instantiated conditionally.
// For more info see the solidity-coverage FAQ.
//
// provider = new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/')
// }

const Web3 = require('web3');
const web3 = new Web3();
const WalletProvider = require('truffle-wallet-provider');
const Wallet = require('ethereumjs-wallet');

const ropstenPrivateKey = new Buffer(process.env.ROPSTEN_PRIVATE_KEY || 'c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3', 'hex');
const ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
const ropstenProvider = new WalletProvider(ropstenWallet, 'https://ropsten.infura.io/' + process.env.INFURA_API_TOKEN || 'mxzjp2sbsk1XcFwsVTrg');

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gasPrice: 22000000000,
    },
    coverage: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
    ropsten: {
      provider: ropstenProvider,
      gas: 6721975,
      gasPrice: web3.utils.toWei('50', 'gwei'),
      network_id: '3',
    }
  },
  rpc: {
    host: "localhost",
    port: 8545
  }
};
