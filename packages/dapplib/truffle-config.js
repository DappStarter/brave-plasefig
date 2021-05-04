require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strike curtain magic hole grid enroll slot gaze'; 
let testAccounts = [
"0x345cfd72b03e7f6c54b9f92b84c75d1aa5191105dda6f25b2476d1d8425c9d59",
"0xe14b1e04ee445e147526ac025b78d57e1d67ede234fc003aca7adcac1e9801a9",
"0x209284d139b51bbe2c0811eede0cb84776fd3a09939e4d8c1b071a3f03942f2e",
"0x6a8ce23cb837036a51f9ffae3241ef572af34bc8b26f7b37dc57ff987c0aadac",
"0x187ab1025a23b27325dab5116093b15d301ff9651cf85cf14fff8bc3d27af62b",
"0x2c46cad4f24c4970f48405f73c0f3afe51462ff1d484fab31adbca54e940fcd9",
"0x555d23a18b40fd9ea963260cb36fa8e6a0f80fbf13918315098f4b7c1930d507",
"0x987a065f0ee7c87dbbe11d9b9ee352e92ce85fddb946ff8b232d4682f47a37ee",
"0x952ab5774fdcddced2b9a64a2fb6e51a2dc8f739eb08c5b369e9907b0aaa74ca",
"0x461eade192803060cd19597632c586e0534658db29314c56df21f92201ab6812"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
