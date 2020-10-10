import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import CartList from '../../components/CartList';
import Footer from '../../components/Footer';

const CartPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <CartList />
      <Footer />
    </Container>
  );
};

export default CartPage;
