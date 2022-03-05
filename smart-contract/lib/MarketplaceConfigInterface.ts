export default interface MarketplaceConfigInterface {
  name: string;
  generateCollectionUrl: (marketplaceIdentifier: any, isMainnet: boolean) => string;
};
