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
  contractName: 'Alkebulantribe',
  tokenName: 'Alkebulantribe.io',
  tokenSymbol: 'ALKTRB',
  hiddenMetadataUri: 'ipfs://bafkreigyqplevag7l7svksq6jzddr5fqhky3dptqt6k6k3tvniruy2mb54',
  maxSupply: 6000,
  whitelistSale: {
    price: 0.07,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x72BE93EFA61ACD408a1DAC1BAcE616b6cF7a82DC",
  marketplaceIdentifier: 'Alkebulantribe',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
