import Web3 from 'web3';
import { WEB3_HOST } from 'graveyard/App/configs';
import { abi } from 'graveyard/App/configs/contract';

export const web3 = new Web3(new Web3.providers.HttpProvider(WEB3_HOST));

export const someContract = web3.eth.contract(abi);

export const getBlockNumber = () => new Promise((resolv, reject) => {
    web3.eth.getBlockNumber((error, result) => resolv(result));
});
