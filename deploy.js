// deploy code will go here

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require ('./compile');

const provider = new HDWalletProvider(
    'rifle present nasty useful evidence social noodle funny tattoo dizzy any blame',
    'https://rinkeby.infura.io/v3/490801d4ef95490c948bc7d9865e81dd',
);

const web3 = new Web3(provider);

// we create a function so we can use async await although I'm not too sure why at this moment

const deploy = async () => {
const accounts = await web3.eth.getAccounts();

console.log('Attempting to deploy from account', accounts[0]);

const result = await new web3.eth.Contract(JSON.parse(interface))
.deploy({ data: bytecode, arguments: ['Hi there!'] })
.send({ gas: '1000000', from: accounts[0]});

console.log('Contract deployed to', result.options.address);

};

deploy ();