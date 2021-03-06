import {useRoute} from '@react-navigation/native';
import Background2 from 'App/assets/svg-components/Background2';
import PlusIcon from 'App/assets/svg-components/PlusIcon';
import BackBtn from 'App/components/BackBtn';
import CardProduct from 'App/components/CardProduct';
import ButtonCustom from 'App/components/ItemCart/Button';
import ToastCustom from 'App/components/ToastCustom';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Box, Center, Pressable, useToast, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useDispatch, useSelector} from 'react-redux';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import formatMoney from 'Utils/helpers/format-money';
import {
  clearProducts,
  getProductDetail,
  getProducts,
} from 'Utils/stores/products/products.creator';
import {IAppState} from 'Utils/stores/state';
import * as _ from 'lodash';
import {addProductCart} from 'Utils/stores/cart/cart.creator';
import {createOrder} from 'Utils/stores/orders/orders.creator';
import {OrderStatus} from 'Utils/stores/orders/orders.dto';

const ProductDetail = () => {
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const toast = useToast();
  const id = 'toast-custom';

  const [quantity, setQuantity] = useState<number>(1);

  const {productDetail, products} = useSelector(
    (state: IAppState) => state.productsState,
  );
  const {profile} = useSelector((state: IAppState) => state.profileState);

  useEffect(() => {
    if (route?.params?.id) {
      dispatch(getProductDetail(route.params.id));
      dispatch(clearProducts());
    }
  }, [route?.params?.id]);

  useEffect(() => {
    return () => {
      dispatch(clearProducts());
    };
  }, []);

  useEffect(() => {
    if (productDetail?.parent_id) {
      dispatch(getProducts({parent_id: productDetail.parent_id}));
    }
  }, [productDetail]);

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background2 />
      </View>
      <SafeAreaView style={{flex: 1, width: '100%', position: 'relative'}}>
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            top: widthPercentageToDP(4) + getStatusBarHeight(),
            left: widthPercentageToDP(3),
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: ColorStyles.background_primary,
              borderRadius: 13,
            }}>
            <BackBtn color="#fff" bg={ColorStyles.primary} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor: '#fff'}}>
            <Image
              style={{
                width: '100%',
                height: 'auto',
                resizeMode: 'contain',
                aspectRatio: 1,
              }}
              source={{
                uri: productDetail?.img_url,
              }}
            />
            <VStack
              space={2}
              style={{
                paddingHorizontal: widthPercentageToDP(4),
                paddingTop: heightPercentageToDP(1),
              }}>
              <Text style={textStyles.p_bold}>
                {productDetail?.product_name}
              </Text>
              <Text style={textStyles.p}>
                {formatMoney(productDetail?.sale_price)}??
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View>
                  <ButtonCustom
                    onPress={handleDecrease}
                    icon={
                      <View
                        style={{
                          height: 2,
                          width: widthPercentageToDP(2),
                          backgroundColor: '#fff',
                        }}
                      />
                    }
                  />
                </View>
                <View style={{marginHorizontal: 10}}>
                  <Text style={textStyles.p_bold}>{quantity}</Text>
                </View>
                <View>
                  <ButtonCustom onPress={handleIncrease} icon={<PlusIcon />} />
                </View>
              </View>
            </VStack>
            <Pressable
              onPress={() => {
                if (profile) {
                  dispatch(
                    createOrder({
                      products: [
                        {
                          product_id: productDetail?._id || '',
                          quantity,
                          price: productDetail?.sale_price || 0,
                          product_name: productDetail?.product_name || '',
                          img_url: productDetail?.img_url || '',
                        },
                      ],
                      customer: {
                        address: profile.address || '',
                        phone: profile.phone || '',
                        name: profile.name || '',
                        note: '',
                      },
                      status: OrderStatus.in_order,
                      user_id: profile._id,
                    }),
                  );
                } else {
                  dispatch(
                    addProductCart({
                      products: [
                        {
                          product_id: productDetail?._id || '',
                          quantity,
                          price: productDetail?.sale_price || 0,
                          product_name: productDetail?.product_name || '',
                          img_url: productDetail?.img_url || '',
                        },
                      ],
                    }),
                  );
                }
                if (!toast.isActive(id)) {
                  toast.show({
                    render: () => (
                      <ToastCustom
                        type="success"
                        title="Th??m v??o gi??? h??ng th??nh c??ng"
                      />
                    ),
                    id,
                    duration: 1000,
                  });
                }
              }}>
              {({isPressed}) => (
                <View
                  style={[
                    styles.boxAddToCart,
                    {
                      transform: [
                        {
                          scale: isPressed ? 0.97 : 1,
                        },
                      ],
                    },
                  ]}>
                  <Text
                    style={[textStyles.p_bold, {color: ColorStyles.primary}]}>
                    Th??m v??o gi??? h??ng
                  </Text>
                </View>
              )}
            </Pressable>
          </View>
          <Box paddingLeft={4} paddingRight={4} paddingY={5}>
            <Center paddingTop={3}>
              <Text style={textStyles.h2_bold}>S???n ph???m li??n quan</Text>
            </Center>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: heightPercentageToDP(2),
                justifyContent: 'space-between',
              }}>
              {_.isArray(products?.data) &&
                products.data.map((product, index: number) => (
                  <React.Fragment key={index}>
                    {product._id !== productDetail?._id && (
                      <CardProduct
                        style={{
                          width: '48%',
                          marginBottom: heightPercentageToDP(2),
                        }}
                        title={product.product_name}
                        img_url={product.img_url}
                        price={product.sale_price}
                        id={product._id}
                      />
                    )}
                  </React.Fragment>
                ))}
            </View>
          </Box>
        </ScrollView>
      </SafeAreaView>
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
    backgroundColor: ColorStyles.background_primary,
    paddingVertical: heightPercentageToDP(1.6),
    borderColor: ColorStyles.primary,
    borderWidth: 1,
    marginTop: heightPercentageToDP(3),
  },
});

export default ProductDetail;
