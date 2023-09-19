import Web3 from 'web3';

class Blockchain {
    constructor() {
        const provider = new Web3.providers.WebsocketProvider(Bun.env.WEB3_PROVIDER);
        this.web3      = new Web3(provider);
    }

    start = async () => {
        const subscription = await this.web3.eth.subscribe('newHeads');

        subscription.on('data', () => console.log('newBlock'));
        subscription.on('error', (error) => console.log('error', error.message));
    };
}

export default new Blockchain();
