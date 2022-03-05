export default interface NetworkConfigInterface {
  chainId: number;
  blockExplorer: {
    name: string;
    generateContractUrl: (contractAddress: string) => string;
  };
};
