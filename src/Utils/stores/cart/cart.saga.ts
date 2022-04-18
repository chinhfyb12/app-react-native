import {all, fork} from 'redux-saga/effects';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {
  CartTypes,
  IAddProductRequestAction,
  IRemoveProductRequestAction,
} from './cart.type';
import {
  addProductCartFailure,
  addProductCartSuccess,
  clearMessageError,
  removeProductCartFailure,
  removeProductCartSuccess,
} from './cart.creator';
import {
  getProductsId,
  getStorageToken,
  setProductsId,
} from 'Utils/helpers/storage';
import {IProductOrderDto} from '../orders/orders.dto';

function* addProductCart({cart}: IAddProductRequestAction): any {
  try {
    const token = getStorageToken();
    token.then((res: any) => {
      if (res) {
        console.log(res);
      } else {
        const products = getProductsId();
        let arrayProducts: IProductOrderDto[] = [];
        products.then((res: any) => {
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
            setProductsId(arrayProducts);
          } else {
            cart.products.forEach(product => arrayProducts.push(product));
            setProductsId(arrayProducts);
          }
        });
      }
    });
    yield put(addProductCartSuccess());
  } catch (error: any) {
    yield put(addProductCartFailure(error?.message));
  }
}
function* watchAddProductCart() {
  yield takeLatest(CartTypes.ADD_PRODUCT_REQUEST, addProductCart);
}

function* removeProductCart({
  productId,
  quantity,
}: IRemoveProductRequestAction) {
  try {
    const token = getStorageToken();
    token.then((res: any) => {
      if (res) {
        console.log(res);
      } else {
        const products = getProductsId();
        let arrayProducts: IProductOrderDto[] = [];
        products.then((res: any) => {
          if (res) {
            arrayProducts = [...JSON.parse(res)];
            for (let i = 0; i < arrayProducts.length; i++) {
              if (arrayProducts[i].product_id === productId) {
                arrayProducts[i].quantity -= quantity;
                if (arrayProducts[i].quantity === 0) {
                  arrayProducts.splice(i, 1);
                }
              }
            }
            setProductsId(arrayProducts);
          }
        });
      }
    });
    yield put(removeProductCartSuccess('remove success'));
    yield put(clearMessageError());
  } catch (err: any) {
    yield put(removeProductCartFailure(err?.message));
    yield put(clearMessageError());
  }
}
function* watchRemoveProductCart() {
  yield takeLatest(CartTypes.REMOVE_PRODUCT_REQUEST, removeProductCart);
}

function* cartSaga() {
  yield all([fork(watchAddProductCart), fork(watchRemoveProductCart)]);
}
export default cartSaga;
