import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Glitch',
  tokenName: 'Glitch',
  tokenSymbol: 'GCT',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 20,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 20,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 20,
  },
  contractAddress: "0xD55484E3BfC80BCa94e6C63d274d1fdb1EF84c7a",
  marketplaceIdentifier: 'Glitch',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
