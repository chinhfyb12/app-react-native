import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Box, HStack, ScrollView} from 'native-base';
import React, {FC} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import CardProduct from '../CardProduct';

interface IItemCategoryProps {
  title: string;
  onViewMore?: (e: GestureResponderEvent) => void;
}

const ItemCategory: FC<IItemCategoryProps> = ({
  title,
  onViewMore = () => {},
}) => {
  return (
    <Box>
      <Box style={styles.boxTitle}>
        <Text style={textStyles.h2_bold}>{title}</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={onViewMore}>
          <Text
            style={[
              textStyles.label,
              {marginLeft: widthPercentageToDP(4), color: ColorStyles.primary},
            ]}>
            Xem thêm
          </Text>
        </TouchableOpacity>
      </Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack space={6}>
          {[1, 2, 3, 4, 5].map((_, index: number) => (
            <CardProduct
              key={index}
              style={{width: widthPercentageToDP(45)}}
              title="San pham 1"
              img_url="https://tvmcomics.com.vn/wp-content/uploads/2019/11/anime-girl-ngau.jpg"
              price={190000}
            />
          ))}
        </HStack>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  boxTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: heightPercentageToDP(2),
  },
});

export default ItemCategory;
