const SHA256 = require('crypto-js/sha256');

class Block
{
    constructor(timestamp, data, previousHash = '')
    {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.wildcard = 0;
        this.hash = this.calculateHash();
    }

    calculateHash()
    {
        return SHA256(this.timestamp + this.previousHash + JSON.stringify(this.data) + this.wildcard).toString();
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
