/*   SyberianCoin/block.js
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
|  This program is distributed in the hope that it will be useful, but          |
|  WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY   |
|  or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License      |
|  for more details.                                                            |
|                                                                               |
|  You should have received a copy of the GNU General Public License along      |
|  with this program. If not, see <http://www.gnu.org/licenses/>.               |
|                                                                               |
'==============================================================================*/

const SHA256 = require('crypto-js/sha256');

class Block
{
    constructor(timestamp, transactions, previousHash = '')
    {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.wildcard = 0;
        this.hash = this.calculateHash();
    }

    calculateHash()
    {
        return SHA256(this.timestamp + this.previousHash + JSON.stringify(this.transactions) + this.wildcard).toString();
    }

    miningBlock(difficulty)
    {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0'))
        {
            this.wildcard++;
            this.hash = this.calculateHash();
        }
        console.log('Block mined: ' + this.hash);
    }
}

module.exports = Block;
