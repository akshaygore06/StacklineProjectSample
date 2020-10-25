import {ADD_PRODUCTS} from '../constants/actionTypes';
import initialState from './initialState';
export default function productReducer(state = initialState, action) {
 
  switch (action.type) {
    case ADD_PRODUCTS:
      return {...state.products, products: action.product};

    default:
      return state;
  }
}
