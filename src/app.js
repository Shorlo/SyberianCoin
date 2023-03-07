const SHA256 = require('crypto-js/sha256');

class Block
{
    constructor(timestamp, data, previousHash = '')
    {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    calculateHash()
    {
        return SHA256(this.timestamp + this.previousHash + JSON.stringify(this.data)).toString();
    }
}

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


let syberianCoin = new BlockChain();
syberianCoin.setBlock(new Block('07/03/2023', {amount: 10}));
syberianCoin.setBlock(new Block('18/02/2023', {amount: 40}));
syberianCoin.setBlock(new Block('20/02/2023', {amount: 100}));

console.log(JSON.stringify(syberianCoin, null, 4));
