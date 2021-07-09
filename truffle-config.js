const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "easy leave proof verb wait patient fringe laptop intact opera slab shine";

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    hostia: { // Truffle Ganache GUI app running on host machine
      host: "192.168.12.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "5777",       // Any network (default: none)
      provider: () => new HDWalletProvider(mnemonic, `http://192.168.12.1:7545`),
    },
  //  development: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  },
  //  test: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  },
  },
  compilers: {
  solc: {
    version: "^0.8.0"
  }
  //
}
}
