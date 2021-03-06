import {useNavigation, useRoute} from '@react-navigation/native';
import Background2 from 'App/assets/svg-components/Background2';
import BackIcon from 'App/assets/svg-components/BackIcon';
import {NameScreen} from 'App/constants';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Box, Modal, Pressable, useToast, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import formatMoney from 'Utils/helpers/format-money';
import {getProductsId} from 'Utils/helpers/storage';
import ItemCheckout from './ItemCheckout';
import * as _ from 'lodash';
import ToastCustom from 'App/components/ToastCustom';
import Spinner from 'react-native-spinkit';
import {IOrderDto} from 'Utils/stores/orders/orders.dto';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from 'Utils/stores/state';
import {
  checkOutOrder,
  createOrder,
  getOrders,
} from 'Utils/stores/orders/orders.creator';

interface CartData {
  img_url: string;
  product_name: string;
  price: number;
  quantity: number;
  product_id: string;
}
interface Customer {
  user_id?: string;
  name: string;
  phone: string;
  address: string;
  note: string;
}

const CheckoutScreen = () => {
  const navigation = useNavigation<any>();
  const toast = useToast();
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const idToast = 'error';

  const [listProducts, setListProducts] = useState<CartData[]>([]);
  const [customer, setCustomer] = useState<Customer>({} as Customer);

  const {loading, message, order} = useSelector(
    (state: IAppState) => state.orderState,
  );
  const {profile} = useSelector((state: IAppState) => state.profileState);

  useEffect(() => {
    if (profile) {
      dispatch(getOrders());
      const info: Customer = {
        user_id: profile._id,
        name: profile.name || '',
        phone: profile.phone || '',
        address: profile.address || '',
        note: '',
      };
      setCustomer(info);
    } else {
      const productsStorage = getProductsId();
      productsStorage.then((res: any) => {
        if (_.isEmpty(JSON.parse(res)) || !JSON.parse(res)) {
          navigation.navigate(NameScreen.cart_screen);
        } else {
          setListProducts(JSON.parse(res));
        }
      });
    }
  }, [profile]);

  useEffect(() => {
    if (order?.products && order?.products?.length > 0) {
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
      navigation.navigate(NameScreen.cart_screen);
    }
  }, [order]);

  const handleCheckout = () => {
    if (_.isEmpty(customer)) {
      if (!toast.isActive(idToast)) {
        toast.show({
          render: () => (
            <ToastCustom type="error" title="??i???n v??o th??ng tin nh???n h??ng" />
          ),
          id: idToast,
          duration: 2000,
        });
      }
    } else {
      const newOrder: IOrderDto = {
        customer,
        products: listProducts,
        status: 'waiting_accept',
      };
      if (profile) {
        newOrder.user_id = profile._id;
        order && dispatch(checkOutOrder(order._id || '', newOrder));
      } else {
        dispatch(createOrder(newOrder));
      }
    }
  };

  useEffect(() => {
    if (route?.params?.customer) {
      setCustomer(route?.params?.customer);
    }
  }, [route?.params?.customer]);

  useEffect(() => {
    if (message) {
      navigation.navigate(NameScreen.success_screen);
    }
  }, [message]);

  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background2 />
      </View>
      <SafeAreaView style={{flex: 1, width: '100%'}}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={{
            marginTop: 20,
            marginBottom: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: widthPercentageToDP(4),
          }}>
          <BackIcon />
          <Text style={[textStyles.h1_bold, {marginLeft: 10}]}>Thanh to??n</Text>
        </TouchableOpacity>
        <View style={{flex: 1, paddingHorizontal: widthPercentageToDP(4)}}>
          <Box style={styles.boxAddress}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                if (customer) {
                  navigation.navigate(NameScreen.address_screen, {customer});
                } else {
                  navigation.navigate(NameScreen.address_screen);
                }
              }}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                paddingY={3}
                paddingX={3}
                justifyContent="space-between">
                <Text style={textStyles.p}>Th??ng tin nh???n h??ng</Text>
                <View style={styles.icon}>
                  <BackIcon width={8} heigth={12} />
                </View>
              </Box>
            </TouchableOpacity>
            {!_.isEmpty(customer) && (
              <VStack space={2} paddingX={3} paddingBottom={3}>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Text style={[textStyles.p_bold, {marginRight: 5}]}>
                    Ng?????i nh???n:
                  </Text>
                  <Text>{customer?.name}</Text>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Text style={[textStyles.p_bold, {marginRight: 5}]}>
                    S??? ??i???n tho???i:
                  </Text>
                  <Text>{customer?.phone}</Text>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Text style={[textStyles.p_bold, {marginRight: 5}]}>
                    ?????a ch???:
                  </Text>
                  <Text>{customer?.address}</Text>
                </Box>
                {customer?.note ? (
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <Text style={[textStyles.p_bold, {marginRight: 5}]}>
                      Ghi ch??:
                    </Text>
                    <Text>{customer?.note}</Text>
                  </Box>
                ) : null}
              </VStack>
            )}
          </Box>
          <FlatList
            data={listProducts}
            renderItem={({item}) => <ItemCheckout {...item} />}
            keyExtractor={item => item.product_id}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Pressable onPress={handleCheckout}>
          {({isPressed}) => (
            <View
              style={[
                styles.boxAddToCart,
                {
                  transform: [
                    {
                      scale: isPressed ? 0.98 : 1,
                    },
                  ],
                },
              ]}>
              <Text style={[textStyles.p_bold, {color: '#fff'}]}>
                Thanh to??n ????n h??ng (
                {formatMoney(
                  listProducts.reduce(
                    (acc, current) => acc + current.price * current.quantity,
                    0,
                  ),
                )}
                ??)
              </Text>
            </View>
          )}
        </Pressable>
      </SafeAreaView>
      <Modal isOpen={loading}>
        <Spinner
          isVisible
          size={40}
          color={ColorStyles.primary}
          type="9CubeGrid"
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F7F8FE',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    opacity: 0.3,
  },
  boxAddToCart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorStyles.primary,
    paddingVertical: heightPercentageToDP(1.6),
  },
  icon: {
    transform: [{rotate: '180deg'}],
  },
  boxAddress: {
    backgroundColor: '#fff',
    marginBottom: heightPercentageToDP(1.6),
  },
});

export default CheckoutScreen;
