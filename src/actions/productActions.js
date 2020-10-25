import * as types from '../constants/actionTypes';

export function addProducts(product) {
    return {
      type: types.ADD_PRODUCTS,
      product
    };
}

