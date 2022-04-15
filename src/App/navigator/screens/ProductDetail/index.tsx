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
import React, {useEffect} from 'react';
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

const ProductDetail = () => {
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const toast = useToast();
  const id = 'toast-custom';

  const {productDetail, products} = useSelector(
    (state: IAppState) => state.productsState,
  );

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
                {formatMoney(productDetail?.sale_price)}đ
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View>
                  <ButtonCustom
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
                  <Text style={textStyles.p_bold}>1</Text>
                </View>
                <View>
                  <ButtonCustom icon={<PlusIcon />} />
                </View>
              </View>
            </VStack>
            <Pressable
              onPress={() => {
                if (!toast.isActive(id)) {
                  toast.show({
                    render: () => (
                      <ToastCustom
                        type="success"
                        title="Thêm vào giỏ hàng thành công"
                      />
                    ),
                    id,
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
                    Thêm vào giỏ hàng
                  </Text>
                </View>
              )}
            </Pressable>
          </View>
          <Box paddingLeft={4} paddingRight={4} paddingY={5}>
            <Center paddingTop={3}>
              <Text style={textStyles.h2_bold}>Sản phẩm liên quan</Text>
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
