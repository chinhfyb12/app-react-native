import {useNavigation} from '@react-navigation/native';
import Background2 from 'App/assets/svg-components/Background2';
import CartIcon_2 from 'App/assets/svg-components/CartIcon_2';
import TrashIcon from 'App/assets/svg-components/TrashIcon';
import ButtonCustom from 'App/components/Button';
import ItemCart from 'App/components/ItemCart';
import {NameScreen} from 'App/constants';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Box, Center, Modal, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  GestureResponderEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import {getProductsId} from 'Utils/helpers/storage';
import {removeProductCart} from 'Utils/stores/cart/cart.creator';
import * as _ from 'lodash';
import {IAppState} from 'Utils/stores/state';
import {createOrder, getOrders} from 'Utils/stores/orders/orders.creator';
import Spinner from 'react-native-spinkit';
import {OrderStatus} from 'Utils/stores/orders/orders.dto';

interface CartData {
  img_url: string;
  product_name: string;
  price: number;
  quantity: number;
  product_id: string;
}

const CartScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const {profile} = useSelector((state: IAppState) => state.profileState);
  const {order, loading} = useSelector((state: IAppState) => state.orderState);

  const [listProducts, setListProducts] = useState<CartData[]>([]);
  let row: Array<any> = [];
  let prevOpenedRow: any;

  useEffect(() => {
    if (profile) {
      navigation.addListener('focus', () => {
        dispatch(getOrders());
      });
    } else {
      navigation.addListener('focus', () => {
        const productsStorage = getProductsId();
        productsStorage.then((res: any) => {
          if (_.isEmpty(JSON.parse(res)) || !JSON.parse(res)) {
            setListProducts([]);
          } else {
            setListProducts(JSON.parse(res));
          }
        });
      });
    }
  }, [navigation]);

  useEffect(() => {
    if (profile) {
      if (order?.products) {
        let newListproducts: CartData[] = [];
        order.products.forEach((item: any) => {
          newListproducts.push({
            img_url: item?.detail?.img_url,
            product_name: item?.detail?.product_name,
            price: item.price,
            quantity: item.quantity,
            product_id: item.product_id,
          });
        });
        setListProducts([...newListproducts]);
      } else {
        setListProducts([]);
      }
    }
  }, [order]);

  const renderItem = ({item, index}: any, onClick: any) => {
    const closeRow = (index: any) => {
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (
      _progress: any,
      _dragX: any,
      onClick: (e: GestureResponderEvent) => void,
    ) => {
      return (
        <TouchableOpacity
          onPress={onClick}
          style={{
            margin: 0,
            justifyContent: 'center',
            width: 70,
            backgroundColor: ColorStyles.danger,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: heightPercentageToDP(3),
            marginLeft: widthPercentageToDP(2),
            borderRadius: 18,
          }}>
          <TrashIcon color={ColorStyles.danger_bold} />
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        onSwipeableOpen={() => closeRow(index)}
        ref={ref => (row[index] = ref)}>
        <ItemCart
          img_url={item.img_url}
          product_name={item.product_name}
          price={item.price}
          quantity={item.quantity}
          product_id={item.product_id}
        />
      </Swipeable>
    );
  };

  const deleteItem = ({item, _index}: any) => {
    if (profile) {
      dispatch(
        createOrder({
          products: [
            {
              product_id: item?.product_id,
              quantity: -item?.quantity,
              price: item?.price,
              img_url: item?.img_url || '',
              product_name: item?.product_name || '',
            },
          ],
          customer: {
            address: profile.address || '',
            phone: profile.email || '',
            name: profile.name || '',
            note: '',
          },
          status: OrderStatus.in_order,
          user_id: profile._id,
        }),
      );
    } else {
      dispatch(removeProductCart(item?.product_id, item?.quantity));
    }

    let arrayProducts: any = [...listProducts];
    for (let i = 0; i < arrayProducts.length; i++) {
      if (arrayProducts[i].product_id === item?.product_id) {
        arrayProducts[i].quantity -= item?.quantity;
        if (arrayProducts[i].quantity === 0) {
          arrayProducts.splice(i, 1);
        }
      }
    }
    setListProducts([...arrayProducts]);
  };

  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background2 />
      </View>
      <SafeAreaView style={{flex: 1, width: '100%'}}>
        <VStack
          space={2}
          paddingBottom={2}
          paddingLeft={2}
          paddingRight={2}
          flex={1}>
          <View style={{marginTop: 20, marginBottom: 20}}>
            <Text style={[textStyles.h1_bold]}>Giỏ hàng</Text>
          </View>
          <View style={{flex: 1}}>
            {listProducts?.length > 0 ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={listProducts}
                renderItem={v =>
                  renderItem(v, () => {
                    deleteItem(v);
                  })
                }
                keyExtractor={(item, _index) => item?.product_id}
              />
            ) : (
              <Box
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Center>
                  <Box mb={3}>
                    <CartIcon_2 color="#E8E8E8" width={197} height={96} />
                  </Box>
                  <Text
                    style={[
                      textStyles.h2_bold,
                      {color: '#696969', marginBottom: 3},
                    ]}>
                    Giỏ hàng đang trống
                  </Text>
                  <Text
                    style={[
                      textStyles.p,
                      {color: '#A9A9A9', textAlign: 'center'},
                    ]}>
                    Hãy trở lại trang chủ và tiếp tục mua hàng nào
                  </Text>
                </Center>
              </Box>
            )}
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View
              style={{
                width: widthPercentageToDP(22),
                marginRight: widthPercentageToDP(2),
                display: 'flex',
                flexDirection: 'row',
              }}>
              <ButtonCustom
                disabled
                icon={<CartIcon_2 width={20} height={20} />}
                title={listProducts.length.toString()}
              />
            </View>
            <View style={{flex: 1}}>
              <ButtonCustom
                onPress={() => navigation.navigate(NameScreen.checkout_screen)}
                title="Đặt hàng"
              />
            </View>
          </View>
        </VStack>
        <Modal isOpen={loading}>
          <Spinner
            isVisible
            size={40}
            color={ColorStyles.primary}
            type="9CubeGrid"
          />
        </Modal>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F7F8FE',
    position: 'relative',
    paddingHorizontal: widthPercentageToDP(4),
    display: 'flex',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    opacity: 0.3,
  },
});

export default CartScreen;
