const Block = require('./block');

class BlockChain
{
    constructor()
    {
        this.chain = [this.createGenesisBlock()];
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
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

module.exports = BlockChain;
