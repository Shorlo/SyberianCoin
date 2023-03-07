const Block = require('./block');
const BlockChain = require('./blockchain');
const Transaction = require('./transaction');

let syberianCoin = new BlockChain();
/*
console.log('Mining Block 1...');
syberianCoin.setBlock(new Block('07/03/2023', {amount: 10}));
console.log('Mining Block 2...');
syberianCoin.setBlock(new Block('18/02/2023', {amount: 40}));
console.log('Mining Block 3...');
syberianCoin.setBlock(new Block('20/02/2023', {amount: 100}));

console.log(syberianCoin.validateChain());
syberianCoin.chain[1].data = { amount: 3000 };
syberianCoin.chain[1].hash = syberianCoin.chain[1].calculateHash();
console.log(syberianCoin.validateChain());
*/

syberianCoin.addTransaction(new Transaction('SyberianBank', 'user', 100));
syberianCoin.addTransaction(new Transaction('Javi', 'Reme', 500));

console.log('Mining Starting...');
syberianCoin.miningPendingTransactions('SyberianBank');

console.log('Mining Starting...');
syberianCoin.miningPendingTransactions('SyberianBank');

console.log('The balance is: ', syberianCoin.getBalanceOfAddress('SyberianBank'));
console.log(JSON.stringify(syberianCoin, null, 4));
