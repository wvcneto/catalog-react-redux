import React from 'react';

import { Provider } from 'react-redux';

import store from './store';

import Catalog from './components/Catalog';
import Cart from './components/Cart';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Provider store={store}>
    <Cart />
    <Catalog />
    <GlobalStyle />
  </Provider>
);

export default App;
