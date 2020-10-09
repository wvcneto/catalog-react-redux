import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Cart from '../../components/CartList';
import Footer from '../../components/Footer';

const CartPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Cart />
      <Footer />
    </Container>
  );
};

export default CartPage;
