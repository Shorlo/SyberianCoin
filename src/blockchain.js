const Block = require('./block');

class BlockChain
{
    constructor()
    {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 6;
    }

    createGenesisBlock()
    {
        return new Block('01/01/2023', 'Genesis Block', '0');
    }

    getLastBlock()
    {
        return this.chain[this.chain.length - 1];
    }

    setBlock(newBlock)
    {
        newBlock.previousHash = this.getLastBlock().hash;
        newBlock.miningBlock(this.difficulty);
        this.chain.push(newBlock);
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
