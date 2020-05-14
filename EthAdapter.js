const dotenv = require('dotenv').config();
const config = require('./config.js');
const Web3 = require('web3');

class EthAdapter {
  constructor() {
    this.web3 = false;
    this.infuraKey = process.env.INFURA_KEY;
    this.tokenAddress = config.tokenAddress;
    this.tokenContract = false;
  }

  connect() {
    if (!this.infuraKey) {
      throw new Error("Infura key not set");
    }

    this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + this.infuraKey));
    this.tokenContract = new this.web3.eth.Contract(config.tokenAbi, config.tokenAddress);
  }

  async call(method, ...values) {
    try {
      let res = await this.tokenContract.methods[method](...values).call();
      console.log("Method: " + method + "\nInput: " + JSON.stringify(values) + "\nResult: " + JSON.stringify(res) + "\n");
    } catch(ex) {
      console.error(ex);
    }
  }
}

module.exports = EthAdapter;
