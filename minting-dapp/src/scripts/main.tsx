import '../styles/main.scss';

import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';

document.title = CollectionConfig.tokenName;

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<Dapp />, document.getElementById('minting-dapp'));
});
