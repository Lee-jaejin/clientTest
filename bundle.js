var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8903'));
/*
if(web3.isConnected()){
    console.log('connected  ' + web3.isConnected());
}else{
    console.log('Not connected  ' + web3.isConnected());
}
*/

var accList = web3.eth.accounts;

window.print(accList)