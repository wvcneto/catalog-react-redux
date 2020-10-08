import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';

import { Container, Image, Content, Button } from './styles';

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <Container>
      <Image>
        <img src={product.image} alt={product.title} />
      </Image>
      <Content>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>
          <strong>
            {' R$ '}
            {product.price.toFixed(2)}
          </strong>
        </p>

        <Button type="button" onClick={handleAddProductToCart}>
          {(hasFailedStockCheck && <span>Esgotado</span>) || 'Comprar'}
        </Button>
      </Content>
    </Container>
  );
};

export default CatalogItem;
