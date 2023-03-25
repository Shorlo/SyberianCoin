/*   SyberianCoin/blockchain.js
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
const Transaction = require('./transaction');

class BlockChain
{
    constructor()
    {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 5;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock()
    {
        return new Block('01/01/2023', 'Genesis Block', '0');
    }

    getLastBlock()
    {
        return this.chain[this.chain.length - 1];
    }

/*
    setBlock(newBlock)
    {
        newBlock.previousHash = this.getLastBlock().hash;
        newBlock.miningBlock(this.difficulty);
        this.chain.push(newBlock);
    }
*/
    addTransaction(transaction)
    {
        this.pendingTransactions.push(transaction);
    }

    miningPendingTransactions(minerAddress)
    {
        let block = new Block(Date.now(), this.pendingTransactions)
        block.previousHash = this.getLastBlock().hash;
        block.miningBlock(this.difficulty);

        console.log('Block mined successfully!!');

        this.chain.push(block);
        this.pendingTransactions = [new Transaction(null, minerAddress, this.miningReward)];
    }

    getBalanceOfAddress(address)
    {
        let balance = 0;
        for(const block of this.chain)
        {
            for(const trans of block.transactions)
            {
                if(trans.fromAddress === address)
                {
                    balance -= trans.amount;
                }
                if(trans.toAddress === address)
                {
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }

    validateChain()
    {
        for(let i = 1; i < this.chain.length; i++)
        {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if(currentBlock.hash != currentBlock.calculateHash())
            {
                return false;
            }

            if(currentBlock.previousHash != previousBlock.hash)
            {
                return false;
            }
        }
        return true;
    }
}

module.exports = BlockChain;
