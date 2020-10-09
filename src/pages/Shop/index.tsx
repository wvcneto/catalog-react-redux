import React from 'react';

import Header from '../../components/Header';
import Catalog from '../../components/Catalog';
import Footer from '../../components/Footer';

import { Container } from './styles';

const Shop: React.FC = () => {
  return (
    <Container>
      <Header />
      <Catalog />
      <Footer />
    </Container>
  );
};

export default Shop;
