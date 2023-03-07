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
    setTransaction(transaction)
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
