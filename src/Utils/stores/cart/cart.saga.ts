import {all, fork} from 'redux-saga/effects';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {CartTypes, IAddProductRequestAction} from './cart.type';
import {addProductCartFailure, addProductCartSuccess} from './cart.creator';
import {
  getProductsId,
  getStorageToken,
  setProductsId,
} from 'Utils/helpers/storage';
import {IProductOrderDto} from '../orders/orders.dto';

function* addProductCart({cart}: IAddProductRequestAction) {
  try {
    const hanldeAddProductCart = () => {
      const token = getStorageToken();
      token.then((res: any) => {
        if (res) {
          console.log(res);
        } else {
          const products = getProductsId();
          let arrayProducts: IProductOrderDto[] = [];
          products.then(function* (res: any) {
            if (res) {
              arrayProducts = [...JSON.parse(res)];
              for (let j = 0; j < cart.products.length; j++) {
                let exist: boolean = false;
                for (let i = 0; i < arrayProducts.length; i++) {
                  if (
                    arrayProducts[i].product_id === cart.products[j].product_id
                  ) {
                    arrayProducts[i].quantity += cart.products[j].quantity;
                    exist = true;
                  }
                }
                exist === false && arrayProducts.push(cart.products[j]);
              }
              // yield put(
              //   addProductCartSuccess({
              //     ...cart,
              //     products: arrayProducts,
              //   }),
              // );
              setProductsId(arrayProducts);
              return {
                ...cart,
                products: arrayProducts,
              };
            } else {
              cart.products.forEach(product => arrayProducts.push(product));
              setProductsId(arrayProducts);
              return {
                ...cart,
                products: arrayProducts,
              };
            }
          });
        }
      });
    };
    const data: any = hanldeAddProductCart();
    console.log(data);
    yield put(addProductCartSuccess(data));
  } catch (error: any) {
    yield put(addProductCartFailure(error?.message));
  }
}
function* watchAddProductCart() {
  yield takeLatest(CartTypes.ADD_PRODUCT_REQUEST, addProductCart);
}

function* cartSaga() {
  yield all([fork(watchAddProductCart)]);
}
export default cartSaga;
