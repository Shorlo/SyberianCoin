/*   SyberianCoin/app.js
       ____     __           _           _____        __
      / __/_ __/ /  ___ ____(_)__  ___  / ___/__  ___/ /__
 --- _\ \/ // / _ \/ -_) __/ / _ `/ _ \/ /__/ _ \/ _  / -_)---------------------
|   /___/\_, /_.__/\__/_/ /_/\_,_/_//_/\___/\___/\_,_/\__/                      |
|       /___/                                                                   |
|                                                                               |
|   Copyright © 2022-2023 Javier Sainz de Baranda Goñi.                         |
|   Released under the terms of the GNU Lesser General Public License v3.       |
|                                                                               |
|   This program is free software: you can redistribute it and/or modify it     |
|   under the terms of the GNU General Public License as published by the Free  |
|   Software Foundation, either version 3 of the License, or (at your option)   |
|   any later version.                                                          |
|   This program is distributed in the hope that it will be useful, but         |
|   WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY  |
|   or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License     |
|   for more details.                                                           |
|                                                                               |
|   You should have received a copy of the GNU General Public License along     |
|   with this program. If not, see <http://www.gnu.org/licenses/>.              |
|                                                                               |
'==============================================================================*/

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
