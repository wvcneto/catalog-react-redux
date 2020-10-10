import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { IProduct } from '../../store/modules/cart/types';
import CatalogItem from '../CatalogItem';

import { Container } from './styles';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => setCatalog(response.data));
  }, []);

  return (
    <Container className="main">
      <ul className="products">
        {catalog.map(product => (
          <li>
            <CatalogItem key={product.id} product={product} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Catalog;
