const Block = require('./block');
const BlockChain = require('./blockchain');

let syberianCoin = new BlockChain();
syberianCoin.setBlock(new Block('07/03/2023', {amount: 10}));
syberianCoin.setBlock(new Block('18/02/2023', {amount: 40}));
syberianCoin.setBlock(new Block('20/02/2023', {amount: 100}));

console.log(syberianCoin.validateChain());

syberianCoin.chain[1].data = { amount: 3000 };
syberianCoin.chain[1].hash = syberianCoin.chain[1].calculateHash();

console.log(syberianCoin.validateChain());
console.log(JSON.stringify(syberianCoin, null, 4));
