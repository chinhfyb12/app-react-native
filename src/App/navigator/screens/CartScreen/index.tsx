import Background2 from 'App/assets/svg-components/Background2';
import CartIcon_2 from 'App/assets/svg-components/CartIcon_2';
import TrashIcon from 'App/assets/svg-components/TrashIcon';
import ButtonCustom from 'App/components/Button';
import ItemCart from 'App/components/ItemCart';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {VStack} from 'native-base';
import React, {useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';

interface CartData {
  img_url: string;
  product_name: string;
  price: number;
  quantity: number;
}

const CartScreen = () => {
  const tempData: CartData[] = [
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

  const [listProducts, setListProducts] = useState<CartData[]>(
    tempData.map((item: CartData, index: number) => ({
      key: `${index}`,
      ...item,
    })),
  );
  let row: Array<any> = [];
  let prevOpenedRow: any;

  const renderItem = ({item, index}: any, onClick: any) => {
    const closeRow = (index: any) => {
      console.log('closerow');
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress: any, dragX: any, onClick: any) => {
      return (
        <View
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
        </View>
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
        />
      </Swipeable>
    );
  };

  const deleteItem = ({item, index}: any) => {
    console.log(item, index);
    let a = listProducts;
    a.splice(index, 1);
    setListProducts([...a]);
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
            <FlatList
              showsVerticalScrollIndicator={false}
              data={tempData}
              renderItem={v =>
                renderItem(v, () => {
                  console.log('Pressed', v);
                  deleteItem(v);
                })
              }
              keyExtractor={(_, index) => index.toString()}
            />
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
                title="2"
              />
            </View>
            <View style={{flex: 1}}>
              <ButtonCustom title="Đặt hàng" />
            </View>
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
