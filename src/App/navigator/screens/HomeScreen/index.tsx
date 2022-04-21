import {useNavigation} from '@react-navigation/native';
import Background from 'App/assets/svg-components/Background';
import ChatIcon from 'App/assets/svg-components/ChatIcon';
import ItemCategory from 'App/components/ItemCategory';
import {NameScreen} from 'App/constants';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Box, ScrollView, VStack} from 'native-base';
import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import {getProductsHome} from 'Utils/stores/products/products.creator';
import {IAppState} from 'Utils/stores/state';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const {productsHome} = useSelector((state: IAppState) => state.productsState);

  useEffect(() => {
    dispatch(getProductsHome());
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingHorizontal: 8}}>
          <VStack space={8} paddingBottom={10}>
            <View
              style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={[
                    textStyles.h1_bold,
                    {color: ColorStyles.primary, marginBottom: 6},
                  ]}>
                  Supermarket Online
                </Text>
                <Text
                  style={[textStyles.h2_bold, {color: ColorStyles.primary}]}>
                  Find your favorite food
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate(NameScreen.chat_screen)}>
                <ChatIcon />
              </TouchableOpacity>
            </View>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              borderRadius={20}
              overflow="hidden"
              height={heightPercentageToDP(20)}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={require('App/assets/images/banner_1.png')}
              />
            </Box>
            <ItemCategory
              onViewMore={() =>
                navigation.navigate(NameScreen.list_products_screen, {
                  category_id: '6241ce6bb5f543ad01172c39',
                  name: 'Đồ dùng cá nhân',
                })
              }
              title="Đồ dùng cá nhân"
              listProducts={productsHome?.products_personal}
            />
            <ItemCategory
              onViewMore={() =>
                navigation.navigate(NameScreen.list_products_screen, {
                  category_id: '6241ce51b5f543ad01172c35',
                  name: 'Thức ăn đóng hộp',
                })
              }
              title="Thức ăn đóng hộp"
              listProducts={productsHome?.products_canned_food}
            />
            <ItemCategory
              onViewMore={() =>
                navigation.navigate(NameScreen.list_products_screen, {
                  category_id: '6241ce40b5f543ad01172c33',
                  name: 'Đồ uống',
                })
              }
              title="Đồ uống"
              listProducts={productsHome?.products_cokes}
            />
          </VStack>
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
    paddingHorizontal: widthPercentageToDP(4),
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0.2,
  },
});

export default HomeScreen;
