import { combineReducers } from 'redux';
import productReducer from './productsReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  productReducer,
});

export default rootReducer;
