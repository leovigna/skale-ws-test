import Web3 from 'web3';

async function main() {
    //Web3
    const web3Http = new Web3(process.env.ETH_HTTP_URL);
    const web3WS = new Web3(process.env.ETH_WS_URL);

    //Block latest
    const latestBlockNumber = await web3Http.eth.getBlockNumber();
    console.debug(latestBlockNumber);
    const latestBlock = await web3Http.eth.getBlock(latestBlockNumber);
    console.debug(latestBlock);

    //Block subscription
    web3WS.eth.subscribe('newBlockHeaders').on('data', block => {
        console.debug(block);
    });
}

main();
