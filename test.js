const {Blockchain, Transaction, Block} = require('./main.js')

//let elephCoin1 = new Blockchain();
//elephCoin1.addBlock(new Block("10/06/2018", {amount : 4}));
//elephCoin1.addBlock(new Block("13/06/2018", {amount : 10}));
//
//console.log('Is Blockchain valid? \n' + elephCoin1.isChainValid())
//
//elephCoin1.chain[1].data = {amout : 100};
//elephCoin1.chain[1].hash = elephCoin1.chain[1].calculateHash();
//
//console.log('Is Blockchain valid? \n' + elephCoin1.isChainValid())
//
//console.log(JSON.stringify(elephCoin1, null, 4));

let elephCoin2 = new Blockchain();
elephCoin2.createTransaction( new Transaction('address1', 'address2', 100));
elephCoin2.createTransaction( new Transaction('address1', 'address2', 50));

console.log('\n Starting the miner...');
elephCoin2.minePendingTransactions('jorje');

console.log('\n Starting the miner...');
elephCoin2.minePendingTransactions('jorje');

console.log('\Balance of jorge is...', elephCoin2.getBalanceOfAddress('jorje'))