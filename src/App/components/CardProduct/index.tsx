import PlusIcon from 'App/assets/svg-components/PlusIcon';
import {textStyles} from 'App/theme/textStyles';
import React from 'react';
import {FC} from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {Image, Text, View} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import formatMoney from 'Utils/helpers/format-money';
import ButtonCustom from '../Button';
import Paper from '../Paper';

interface ICardProduct {
  img_url: string;
  title: string;
  price: number;
  onPress?: (e: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

const CardProduct: FC<ICardProduct> = ({
  img_url,
  title,
  price,
  onPress = () => {},
  style,
}) => {
  return (
    <Paper style={style}>
      <Image
        style={{
          width: '100%',
          height: 150,
        }}
        source={{
          uri: img_url,
        }}
      />
      <View style={styles.boxContent}>
        <Text style={textStyles.p_bold}>{title}</Text>
        <View style={styles.boxAction}>
          <Text style={textStyles.p}>{formatMoney(price)}đ</Text>
          <View style={{width: widthPercentageToDP(10)}}>
            <ButtonCustom icon={<PlusIcon />} />
          </View>
        </View>
      </View>
    </Paper>
  );
};

const styles = StyleSheet.create({
  root: {},
  boxContent: {
    backgroundColor: '#fff',
    paddingVertical: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(2.5),
  },
  boxAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightPercentageToDP(1),
  },
});

export default CardProduct;
