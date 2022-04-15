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
import {IProductDto} from 'Utils/stores/products/products.dto';
import CardProduct from '../CardProduct';
import * as _ from 'lodash';

interface IItemCategoryProps {
  title: string;
  onViewMore?: (e: GestureResponderEvent) => void;
  listProducts?: IProductDto[];
}

const ItemCategory: FC<IItemCategoryProps> = ({
  title,
  onViewMore = () => {},
  listProducts = [],
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
          {_.isArray(listProducts) &&
            listProducts.map((product, index: number) => (
              <CardProduct
                key={index}
                style={{width: widthPercentageToDP(45)}}
                title={product.product_name}
                img_url={product.img_url}
                price={product.sale_price}
                id={product._id}
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
