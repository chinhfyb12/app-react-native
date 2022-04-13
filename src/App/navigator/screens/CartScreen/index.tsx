import Background2 from 'App/assets/svg-components/Background2';
import ButtonCustom from 'App/components/Button';
import ItemCart from 'App/components/ItemCart';
import {textStyles} from 'App/theme/textStyles';
import {VStack} from 'native-base';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP} from 'Utils/helpers';

const CartScreen = () => {
  const tempData = [
    {
      img_url:
        'https://tvmcomics.com.vn/wp-content/uploads/2019/11/anime-girl-ngau.jpg',
      product_name: 'Sua chua',
      price: 20000,
      quantity: 2,
    },
    {
      img_url:
        'https://tvmcomics.com.vn/wp-content/uploads/2019/11/anime-girl-ngau.jpg',
      product_name: 'Sua chua',
      price: 20000,
      quantity: 2,
    },
    {
      img_url:
        'https://tvmcomics.com.vn/wp-content/uploads/2019/11/anime-girl-ngau.jpg',
      product_name: 'Sua chua',
      price: 20000,
      quantity: 2,
    },
    {
      img_url:
        'https://tvmcomics.com.vn/wp-content/uploads/2019/11/anime-girl-ngau.jpg',
      product_name: 'Sua chua',
      price: 20000,
      quantity: 2,
    },
    {
      img_url:
        'https://tvmcomics.com.vn/wp-content/uploads/2019/11/anime-girl-ngau.jpg',
      product_name: 'Sua chua',
      price: 20000,
      quantity: 2,
    },
    {
      img_url:
        'https://tvmcomics.com.vn/wp-content/uploads/2019/11/anime-girl-ngau.jpg',
      product_name: 'Sua chua',
      price: 20000,
      quantity: 2,
    },
    {
      img_url:
        'https://tvmcomics.com.vn/wp-content/uploads/2019/11/anime-girl-ngau.jpg',
      product_name: 'Sua chua',
      price: 20000,
      quantity: 2,
    },
  ];

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
            <FlatList
              showsVerticalScrollIndicator={false}
              data={tempData}
              renderItem={({item}) => <ItemCart {...item} />}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
          <View>
            <ButtonCustom title="Đặt hàng" />
          </View>
        </VStack>
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
