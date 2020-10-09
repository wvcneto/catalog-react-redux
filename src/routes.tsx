import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Shop from './pages/Shop';
import Cart from './pages/Cart';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Shop} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
}

export default Routes;
