import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong>
      <p>
        {' $ '}
        {product.price}
      </p>
      <button type="button" onClick={handleAddProductToCart}>
        Adicionar
      </button>
    </article>
  );
};

export default CatalogItem;
