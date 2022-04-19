import {useRoute} from '@react-navigation/native';
import Background2 from 'App/assets/svg-components/Background2';
import BackBtn from 'App/components/BackBtn';
import CardProduct from 'App/components/CardProduct';
import Filter from 'App/components/Filter';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Modal, VStack} from 'native-base';
import React, {FC, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import {
  clearProducts,
  getProducts,
} from 'Utils/stores/products/products.creator';
import {IAppState} from 'Utils/stores/state';
import * as _ from 'lodash';
import FilterModal from './FilterModal';
import Spinner from 'react-native-spinkit';

interface IListProductsProps {}

const ListProducts: FC<IListProductsProps> = () => {
  const route = useRoute<any>();
  const dispatch = useDispatch();

  const {products, loading} = useSelector(
    (state: IAppState) => state.productsState,
  );

  useEffect(() => {
    if (route?.params?.category_id) {
      dispatch(getProducts({parent_id: route.params.category_id}));
    }
    return () => {
      dispatch(clearProducts());
    };
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background2 />
      </View>
      <SafeAreaView style={{flex: 1, width: '100%'}}>
        <VStack space={2} paddingBottom={10} paddingLeft={2} paddingRight={2}>
          <View style={{marginTop: 20, marginBottom: 10}}>
            <Text
              style={[
                textStyles.h1_bold,
                {color: ColorStyles.primary, marginBottom: 6},
              ]}>
              Supermarket Online
            </Text>
            <Text style={[textStyles.h2_bold, {color: ColorStyles.primary}]}>
              Find your favorite food
            </Text>
          </View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <BackBtn />
              <FilterModal categoryId={route.params.category_id} />
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={[textStyles.h2_bold, {marginTop: 5, marginBottom: 15}]}>
              {route?.params?.name}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                paddingBottom: heightPercentageToDP(15),
              }}>
              {_.isArray(products?.data) &&
                products.data.map((product, index: number) => (
                  <CardProduct
                    key={index}
                    style={{
                      width: '46%',
                      marginBottom: heightPercentageToDP(3),
                    }}
                    title={product.product_name}
                    img_url={product.img_url}
                    price={product.sale_price}
                    id={product._id}
                  />
                ))}
            </View>
          </ScrollView>
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

export default ListProducts;
