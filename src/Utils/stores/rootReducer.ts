import {combineReducers} from 'redux';
import {cartReducer} from './cart/cart.reducer';
import {chatReducer} from './chat/chat.reducer';
import {loginReducer} from './login/login.reducer';
import {orderReducer} from './orders/orders.reducer';
import {productReducer} from './products/products.reducer';
import {profileReducer} from './profile/profile.reducer';
import {registerReducer} from './register/register.reducer';
import {IAppState} from './state';

export const rootReducer = combineReducers<IAppState>({
  productsState: productReducer,
  profileState: profileReducer,
  cartState: cartReducer,
  orderState: orderReducer,
  loginState: loginReducer,
  registerState: registerReducer,
  chatState: chatReducer,
});
