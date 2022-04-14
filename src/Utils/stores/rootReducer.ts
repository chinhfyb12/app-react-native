import {combineReducers} from 'redux';
import {productReducer} from './products/products.reducer';
import {IAppState} from './state';

export const rootReducer = combineReducers<IAppState>({
  productsState: productReducer,
});
