import '../styles/main.scss';

import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';

import '@rainbow-me/rainbowkit/styles.css';
import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { chain, createClient, WagmiProvider } from 'wagmi';

// TODO: Map from selected network
const { chains, provider } = configureChains(
  [chain.rinkeby],
  [
    apiProvider.alchemy(process.env.ALCHEMY_TESTNET_ID),
    apiProvider.fallback()
  ]
);

const { connectors } = getDefaultWallets({
  appName: document.title || CollectionConfig.tokenName,
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

if (document.title === '') {
  document.title = CollectionConfig.tokenName;
}

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Dapp/>
      </RainbowKitProvider>
    </WagmiProvider>,
    document.getElementById('minting-dapp')
  );
});
