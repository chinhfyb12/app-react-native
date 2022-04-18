import {ICartState} from './cart/cart.dto';
import {ILoginState} from './login/login.dto';
import {IOrderState} from './orders/orders.dto';
import {IProductsState} from './products/products.dto';
import {IProfileState} from './profile/profile.dto';

export interface IAppState {
  productsState: IProductsState;
  profileState: IProfileState;
  cartState: ICartState;
  orderState: IOrderState;
  loginState: ILoginState;
}
