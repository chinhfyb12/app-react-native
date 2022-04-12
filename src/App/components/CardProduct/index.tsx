import PlusIcon from 'App/assets/svg-components/PlusIcon';
import {textStyles} from 'App/theme/textStyles';
import React from 'react';
import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Image, Text, View} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import ButtonCustom from '../Button';
import Paper from '../Paper';

interface ICardProduct {}

const CardProduct: FC<ICardProduct> = () => {
  return (
    <Paper>
      <Image
        style={{
          width: '100%',
          height: 200,
        }}
        source={{
          uri: 'https://tvmcomics.com.vn/wp-content/uploads/2019/11/anime-girl-ngau.jpg',
        }}
      />
      <View style={styles.boxContent}>
        <Text style={textStyles.p_bold}>San pham 1</Text>
        <View style={styles.boxAction}>
          <Text style={textStyles.p}>190.000đ</Text>
          <View style={{width: widthPercentageToDP(12)}}>
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
    paddingVertical: heightPercentageToDP(1.2),
    paddingHorizontal: widthPercentageToDP(2.5),
  },
  boxAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default CardProduct;
