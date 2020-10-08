import { IProduct } from './types';

export function addProductToCart(product: IProduct): unknown {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    },
  };
}
