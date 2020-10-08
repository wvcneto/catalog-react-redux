import {
  IProduct,
  ActionTypes,
  ActionTypeAddProduct,
  ActionTypeFailureAddProduct,
} from './types';

export function addProductToCartRequest(
  product: IProduct,
): ActionTypeAddProduct {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(
  product: IProduct,
): ActionTypeAddProduct {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(
  productId: number,
): ActionTypeFailureAddProduct {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}
