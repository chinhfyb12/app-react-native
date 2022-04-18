import {useNavigation} from '@react-navigation/native';
import PlusIcon from 'App/assets/svg-components/PlusIcon';
import {NameScreen} from 'App/constants';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Box} from 'native-base';
import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import formatMoney from 'Utils/helpers/format-money';

interface IItemCheckoutProps {
  img_url: string;
  product_name: string;
  price: number;
  quantity: number;
  product_id: string;
}

const ItemCheckout: FC<IItemCheckoutProps> = ({
  img_url,
  product_name,
  price,
  quantity,
}) => {
  return (
    <Box style={styles.root}>
      <View>
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
        <View style={{flex: 1}}>
          <Text style={[textStyles.p, {flex: 1}]}>{product_name}</Text>
        </View>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row">
          <Text style={(textStyles.p_bold, {color: ColorStyles.primary})}>
            {formatMoney(price)}đ
          </Text>
          <Text style={textStyles.p}>x{quantity}</Text>
        </Box>
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
    backgroundColor: '#fff',
    marginBottom: heightPercentageToDP(2),
  },
});

export default ItemCheckout;
