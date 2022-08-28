require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue repeat night hour gesture fantasy equal genuine'; 
let testAccounts = [
"0x0b0312636da4cd261f87a98909225c3e86216cd469c9dd895b490ef46da01636",
"0x030dd413140bd8ebf6cdd28c557c67f845b924be3ede33792d46230e521ba2d3",
"0xcdbf748bd4fadabe7a9234af035604bfdfee2ca9158e3497cf2ec44bad778deb",
"0xa8700f7976d8b4baf75c34b724a8ef14a226a9a238a2221181169014d4dd0148",
"0x7551c68bfe8e32c92ee7dbeb09ec47577d6247cb297a33ebe4651ffb41b4db12",
"0x377ed41797f85c4f98a24fe1239ce3d64b8f8393ffd565355b1a8d24f933457a",
"0xc283d3a7d138975a0523e86e4d438960b0e35d952e58c2305cbb0ad50b1ee8d9",
"0x1e77ad8ca115b413bc3ba9236b7e3efe91b921c740c41ffb2aee03af3f4239cb",
"0xbd2ecfff0a14293e6e562baa911e989eed41a28ecef54465191f6ed42f4bc425",
"0x53dff61d37bf39490c0b2bad9b24eb0dfcaf0b32b2623b3fac26de89fb165d56"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

