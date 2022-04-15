import {useNavigation} from '@react-navigation/native';
import PlusIcon from 'App/assets/svg-components/PlusIcon';
import {NameScreen} from 'App/constants';
import {textStyles} from 'App/theme/textStyles';
import {useToast} from 'native-base';
import React from 'react';
import {FC} from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Image, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import formatMoney from 'Utils/helpers/format-money';
import {addProductCart} from 'Utils/stores/cart/cart.creator';
import ButtonCustom from '../Button';
import Paper from '../Paper';
import ToastCustom from '../ToastCustom';

interface ICardProduct {
  img_url?: string;
  title?: string;
  price?: number;
  onPress?: (e: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  id?: string;
}

const CardProduct: FC<ICardProduct> = ({
  img_url,
  title,
  price = 0,
  id = '',
  style,
}) => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const toast = useToast();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={style}
      onPress={() =>
        navigation.navigate(NameScreen.product_detail_screen, {id})
      }>
      <Paper>
        <View
          style={{
            width: '100%',
            height: 150,
            backgroundColor: '#fff',
          }}>
          <Image
            style={{
              width: '100%',
              height: 150,
            }}
            source={{
              uri: img_url,
            }}
            resizeMode="center"
          />
        </View>
        <View style={styles.boxContent}>
          <Text style={textStyles.p_bold}>{title}</Text>
          <View style={styles.boxAction}>
            <Text style={textStyles.p}>{formatMoney(price)}đ</Text>
            <View style={{width: widthPercentageToDP(10)}}>
              <ButtonCustom
                onPress={() => {
                  dispatch(
                    addProductCart({
                      products: [
                        {
                          product_id: id,
                          quantity: 1,
                          price,
                          img_url,
                        },
                      ],
                    }),
                  );
                  toast.show({
                    render: () => (
                      <ToastCustom
                        type="success"
                        title="Thêm vào giỏ hàng thành công"
                      />
                    ),
                    duration: 1000,
                  });
                }}
                icon={<PlusIcon />}
              />
            </View>
          </View>
        </View>
      </Paper>
    </TouchableOpacity>
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
