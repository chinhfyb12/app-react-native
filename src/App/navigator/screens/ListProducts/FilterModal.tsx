import React, {FC, useRef, useState} from 'react';
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Box, Center, Pressable, TextField, VStack} from 'native-base';
import RBSheet from 'react-native-raw-bottom-sheet';
import Filter from 'App/components/Filter';
import {textStyles} from 'App/theme/textStyles';
import {ColorStyles} from 'App/theme/colors';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import InputCustom from 'App/components/Input';
import {Controller, useForm} from 'react-hook-form';
import {IFilterProductsDto} from 'Utils/stores/products/products.dto';
import {useDispatch} from 'react-redux';
import {getProducts} from 'Utils/stores/products/products.creator';
import * as _ from 'lodash';

const FilterModal: FC<{categoryId: string}> = ({categoryId}) => {
  const refRBSheet = useRef<any>();
  const [sortPrice, setSortPrice] = useState<number | null>(null);
  const [sortName, setSortName] = useState<number | null>(null);

  const {control, handleSubmit} = useForm();
  const dispatch = useDispatch();

  const handleSortPrice = (value: number) => {
    if (value !== sortPrice) {
      setSortPrice(value);
    } else {
      setSortPrice(null);
    }
  };
  const handleSortName = (value: number) => {
    if (value !== sortName) {
      setSortName(value);
    } else {
      setSortName(null);
    }
  };

  const onSubmit = (value: any) => {
    let sortBy: any = {};
    if (sortPrice !== null) {
      sortBy.sale_price = sortPrice;
    }
    if (sortName !== null) {
      sortBy.product_name = sortName;
    }
    const filterProductsDto: IFilterProductsDto = {
      sale_price_start: parseFloat(value.sale_price_start),
      sale_price_end: parseFloat(value.sale_price_end),
      parent_id: categoryId,
    };
    if (!_.isEmpty(sortBy)) {
      filterProductsDto.sortBy = sortBy;
    }
    refRBSheet.current.close();
    dispatch(getProducts(filterProductsDto));
  };

  return (
    <>
      <Filter
        onPress={() => {
          if (refRBSheet?.current) {
            refRBSheet.current.open();
          }
        }}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={Dimensions.get('window').height * 0.75}
        keyboardAvoidingViewEnabled={false}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000021',
          },
          draggableIcon: {
            backgroundColor: '#222628b5',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: widthPercentageToDP(6),
            paddingBottom: heightPercentageToDP(4),
          },
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={5}>
            <Center>
              <Text style={textStyles.p_bold}>Bộ lọc tìm kiếm</Text>
            </Center>
            <Box>
              <Text style={textStyles.p}>Khoảng giá (đ)</Text>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="row"
                marginTop={15}
                justifyContent="space-between">
                <Box width="45%">
                  <Controller
                    control={control}
                    name="sale_price_start"
                    render={({field: {onChange, value}}) => (
                      <InputCustom
                        onChangeText={onChange}
                        value={value}
                        keyboardType="numeric"
                        placeholder="Tối thiểu"
                      />
                    )}
                  />
                </Box>
                <Box width="5%" height={0.5} backgroundColor="#ddd" />
                <Box width="45%">
                  <Controller
                    control={control}
                    name="sale_price_end"
                    render={({field: {onChange, value}}) => (
                      <InputCustom
                        onChangeText={onChange}
                        value={value}
                        keyboardType="numeric"
                        placeholder="Tối đa"
                      />
                    )}
                  />
                </Box>
              </Box>
            </Box>
            <Box>
              <Text style={textStyles.p}>Giá</Text>
              <Box style={styles.boxCategory}>
                <TouchableOpacity
                  onPress={() => handleSortPrice(-1)}
                  activeOpacity={0.7}
                  style={[
                    styles.typoCategory,
                    sortPrice === -1 ? styles.active : null,
                  ]}>
                  <Text
                    style={[
                      textStyles.p,
                      {color: sortPrice === -1 ? '#fff' : ColorStyles.orange},
                    ]}>
                    Giảm dần
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleSortPrice(1)}
                  activeOpacity={0.7}
                  style={[
                    styles.typoCategory,
                    sortPrice === 1 ? styles.active : null,
                  ]}>
                  <Text
                    style={[
                      textStyles.p,
                      {color: sortPrice === 1 ? '#fff' : ColorStyles.orange},
                    ]}>
                    Tăng dần
                  </Text>
                </TouchableOpacity>
              </Box>
            </Box>
            <Box>
              <Text style={textStyles.p}>Tên sản phẩm</Text>
              <Box style={styles.boxCategory}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleSortName(-1)}
                  style={[
                    styles.typoCategory,
                    sortName === -1 ? styles.active : null,
                  ]}>
                  <Text
                    style={[
                      textStyles.p,
                      {color: sortName === -1 ? '#fff' : ColorStyles.orange},
                    ]}>
                    Giảm dần
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleSortName(1)}
                  style={[
                    styles.typoCategory,
                    sortName === 1 ? styles.active : null,
                  ]}>
                  <Text
                    style={[
                      textStyles.p,
                      {color: sortName === 1 ? '#fff' : ColorStyles.orange},
                    ]}>
                    Tăng dần
                  </Text>
                </TouchableOpacity>
              </Box>
            </Box>
            <Box>
              <Pressable onPress={handleSubmit(onSubmit)}>
                {({isPressed}) => (
                  <Box
                    style={[
                      styles.boxAddToCart,
                      {
                        transform: [
                          {
                            scale: isPressed ? 0.97 : 1,
                          },
                        ],
                      },
                    ]}>
                    <Text
                      style={[textStyles.p_bold, {color: ColorStyles.primary}]}>
                      Áp dụng
                    </Text>
                  </Box>
                )}
              </Pressable>
            </Box>
          </VStack>
        </ScrollView>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  boxCategory: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  typoCategory: {
    backgroundColor: ColorStyles.background_orange,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginRight: 16,
    borderRadius: 14,
  },
  boxAddToCart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorStyles.background_primary,
    paddingVertical: heightPercentageToDP(1.6),
    borderColor: ColorStyles.primary,
    borderWidth: 1,
    marginTop: heightPercentageToDP(3),
  },
  active: {
    backgroundColor: ColorStyles.orange,
    color: '#fff',
  },
});

export default FilterModal;
