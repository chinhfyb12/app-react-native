import PlusIcon from 'App/assets/svg-components/PlusIcon';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Box} from 'native-base';
import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import formatMoney from 'Utils/helpers/format-money';
import Paper from '../Paper';
import ButtonCustom from './Button';

interface IItemCartProps {
  img_url: string;
  product_name: string;
  price: number;
  quantity: number;
}

const ItemCart: FC<IItemCartProps> = ({
  img_url,
  product_name,
  price,
  quantity,
}) => {
  return (
    <Box style={styles.root}>
      <View style={{borderRadius: 18, overflow: 'hidden'}}>
        <Image
          style={{
            width: widthPercentageToDP(18),
            height: widthPercentageToDP(18),
          }}
          source={{
            uri: img_url,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 10,
          justifyContent: 'space-between',
          display: 'flex',
        }}>
        <Text style={[textStyles.p, {flex: 1}]}>{product_name}</Text>
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
          <ButtonCustom icon={<PlusIcon />} />
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text style={textStyles.p_bold}>{quantity}</Text>
        </View>
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
