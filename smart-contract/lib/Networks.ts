import NetworkConfigInterface from './NetworkConfigInterface';

export const ethereumTestnet: NetworkConfigInterface = {
  chainId: 4,
  blockExplorer:{
    name: 'Etherscan',
    generateContractUrl: (contractAddress: string) => `https://rinkeby.etherscan.io/address/${contractAddress}`,
  },
}

export const ethereumMainnet: NetworkConfigInterface = {
  chainId: 1,
  blockExplorer: {
    name: 'Etherscan',
    generateContractUrl: (contractAddress: string) => `https://etherscan.io/address/${contractAddress}`,
  },
}
