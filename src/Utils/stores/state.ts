import {ICartState} from './cart/cart.dto';
import {IProductsState} from './products/products.dto';
import {IProfileState} from './profile/profile.dto';

export interface IAppState {
  productsState: IProductsState;
  profileState: IProfileState;
  cartState: ICartState;
}
