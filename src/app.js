class Block
{
    constructor(timestamp, data, previousHash = '')
    {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        
    }
}
