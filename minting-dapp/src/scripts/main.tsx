import '../styles/main.scss';

import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<Dapp />, document.getElementById('minting-dapp'));
});
