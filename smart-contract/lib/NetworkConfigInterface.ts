export default interface NetworkConfigInterface {
  chainId: number;
  symbol: string;
  blockExplorer: {
    name: string;
    generateContractUrl: (contractAddress: string) => string;
  };
};
