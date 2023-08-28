import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reducer, { initialState } from './utils/reducer';
import { StateProviderTemp } from './utils/StateProviderTemp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <StateProviderTemp initialState={initialState} reducer={reducer}>
    <App/>
  </StateProviderTemp>
  </React.StrictMode>
);
