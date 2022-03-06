import NetworkConfigInterface from './NetworkConfigInterface';

/*
 * Local networks
 */
export const hardhatLocal: NetworkConfigInterface = {
  chainId: 31337,
  symbol: 'ETH (test)',
  blockExplorer: {
    name: 'Block explorer (not available for local chains)',
    generateContractUrl: (contractAddress: string) => `#`,
  },
}

/*
 * Ethereum
 */
export const ethereumTestnet: NetworkConfigInterface = {
  chainId: 4,
  symbol: 'ETH (test)',
  blockExplorer: {
    name: 'Etherscan (Rinkeby)',
    generateContractUrl: (contractAddress: string) => `https://rinkeby.etherscan.io/address/${contractAddress}`,
  },
}

export const ethereumMainnet: NetworkConfigInterface = {
  chainId: 1,
  symbol: 'ETH',
  blockExplorer: {
    name: 'Etherscan',
    generateContractUrl: (contractAddress: string) => `https://etherscan.io/address/${contractAddress}`,
  },
}

/*
 * Polygon
 */
export const polygonTestnet: NetworkConfigInterface = {
  chainId: 80001,
  symbol: 'MATIC (test)',
  blockExplorer: {
    name: 'Polygonscan (Mumbai)',
    generateContractUrl: (contractAddress: string) => `https://mumbai.polygonscan.com/address/${contractAddress}`,
  },
}

export const polygonMainnet: NetworkConfigInterface = {
  chainId: 137,
  symbol: 'MATIC',
  blockExplorer: {
    name: 'Polygonscan',
    generateContractUrl: (contractAddress: string) => `https://polygonscan.com/address/${contractAddress}`,
  },
}
