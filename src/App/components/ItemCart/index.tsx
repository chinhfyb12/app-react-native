import {useNavigation} from '@react-navigation/native';
import PlusIcon from 'App/assets/svg-components/PlusIcon';
import {NameScreen} from 'App/constants';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Box} from 'native-base';
import React, {FC, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import formatMoney from 'Utils/helpers/format-money';
import {
  addProductCart,
  removeProductCart,
} from 'Utils/stores/cart/cart.creator';
import Paper from '../Paper';
import ButtonCustom from './Button';

interface IItemCartProps {
  img_url: string;
  product_name: string;
  price: number;
  quantity: number;
  product_id: string;
}

const ItemCart: FC<IItemCartProps> = ({
  img_url,
  product_name,
  price,
  quantity,
  product_id,
}) => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  const handleIncrease = () => {
    setCount(prev => prev + 1);
    dispatch(
      addProductCart({
        products: [
          {
            product_id,
            quantity: 1,
            price,
            product_name,
            img_url,
          },
        ],
      }),
    );
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
      dispatch(removeProductCart(product_id, 1));
    }
  };

  return (
    <Box style={styles.root}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate(NameScreen.product_detail_screen, {
            id: product_id,
          })
        }
        style={{borderRadius: 18, overflow: 'hidden'}}>
        <Image
          style={{
            width: widthPercentageToDP(18),
            height: widthPercentageToDP(18),
          }}
          source={{
            uri: img_url,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 10,
          justifyContent: 'space-between',
          display: 'flex',
        }}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() =>
            navigation.navigate(NameScreen.product_detail_screen, {
              id: product_id,
            })
          }>
          <Text style={[textStyles.p, {flex: 1}]}>{product_name}</Text>
        </TouchableOpacity>
        <Text style={(textStyles.p_bold, {color: ColorStyles.primary})}>
          {formatMoney(price)}đ
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
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
          <Text style={textStyles.p_bold}>{count}</Text>
        </View>
        <View>
          <ButtonCustom onPress={handleIncrease} icon={<PlusIcon />} />
        </View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    shadowColor: '#f4f6fc',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 24,
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginBottom: heightPercentageToDP(3),
  },
});

export default ItemCart;
