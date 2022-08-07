// https://eth-goerli.g.alchemy.com/v2/pcFImGVPhphWDi2vEUkX3d9h2DVDAv-Z
// https://eth-mainnet.g.alchemy.com/v2/F6KmvrGyzWI0m7ZJVlWmW9tuzjbOEaFc

const API_KEY = import.meta.env.VITE_GOERLI_TEST_NETWORK_API;


require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/pcFImGVPhphWDi2vEUkX3d9h2DVDAv-Z",
      accounts: [ `${API_KEY}`, ],
    },
  },
};
