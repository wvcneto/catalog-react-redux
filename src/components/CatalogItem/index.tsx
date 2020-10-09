import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { IState } from '../../store';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';

import Button from '../Button';

import { Container } from './styles';

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
    <Container className="product">
      <img src={product.image} alt={product.title} />
      <div className="title">
        <Link to="product">{product.title}</Link>
      </div>
      <div className="description">{product.description}</div>
      <div className="price">
        {' R$ '}
        {product.price.toFixed(2)}
      </div>
      <div className="reviews">★★★★☆</div>

      <Button type="button" onClick={handleAddProductToCart}>
        {(hasFailedStockCheck && <span>Esgotado</span>) || 'Comprar'}
      </Button>
    </Container>
  );
};

export default CatalogItem;
