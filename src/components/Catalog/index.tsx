import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { IProduct } from '../../store/modules/cart/types';
import CatalogItem from '../CatalogItem';

import { Container, Title } from './styles';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => setCatalog(response.data));
  }, []);

  return (
    <>
      <Title>Produtos a Venda</Title>
      <Container>
        {catalog.map(product => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </Container>
    </>
  );
};

export default Catalog;
