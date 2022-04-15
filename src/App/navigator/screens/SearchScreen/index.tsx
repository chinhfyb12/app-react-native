import Background from 'App/assets/svg-components/Background';
import SearchIcon from 'App/assets/svg-components/SearchIcon';
import InputCustom from 'App/components/Input';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {VStack} from 'native-base';
import React, {useMemo} from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {widthPercentageToDP} from 'Utils/helpers';
import {Controller, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {NameScreen} from 'App/constants';
import {useDispatch} from 'react-redux';
import {getProducts} from 'Utils/stores/products/products.creator';

const SearchScreen = () => {
  const {control} = useForm();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const dataCategories = useMemo(
    () => [
      {value: '6241ce40b5f543ad01172c33', label: 'Đồ uống'},
      {value: '6241ce51b5f543ad01172c35', label: 'Thực phẩm đóng hộp'},
      {value: '6241ce5fb5f543ad01172c37', label: 'Gia vị'},
      {value: '6241ce6bb5f543ad01172c39', label: 'Đồ dùng cá nhân'},
    ],
    [],
  );

  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{paddingHorizontal: 8}}>
            <VStack space={8} paddingBottom={10}>
              <View style={{marginTop: 20}}>
                <Text
                  style={[
                    textStyles.h1_bold,
                    {color: ColorStyles.primary, marginBottom: 6},
                  ]}>
                  Supermarket Online
                </Text>
                <Text
                  style={[textStyles.h2_bold, {color: ColorStyles.primary}]}>
                  Find your favorite food
                </Text>
              </View>
              <View>
                <Controller
                  control={control}
                  name="product_name"
                  render={({field: {onChange, value}}) => (
                    <InputCustom
                      type="start-icon"
                      icon={<SearchIcon />}
                      placeholder="Tìm kiếm"
                      keyboardType="web-search"
                      onChangeText={onChange}
                      value={value}
                      onSubmitEditing={() => {
                        Keyboard.dismiss();
                        dispatch(getProducts({product_name: value}));
                        navigation.navigate(
                          NameScreen.list_products_search_screen,
                          {
                            product_name: value,
                          },
                        );
                      }}
                    />
                  )}
                />
              </View>
              <View>
                <Text style={textStyles.h2_bold}>Danh mục</Text>
                <View style={styles.boxCategory}>
                  {dataCategories.map((item: any, index: number) => (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={0.7}
                      onPress={() => {
                        dispatch(getProducts({parent_id: item.value}));
                        navigation.navigate(
                          NameScreen.list_products_search_screen,
                          {
                            category_id: item.value,
                          },
                        );
                      }}
                      style={styles.typoCategory}>
                      <Text style={[textStyles.p, {color: ColorStyles.orange}]}>
                        {item.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View>
                <Text style={textStyles.h2_bold}>Gợi ý</Text>
                <View style={styles.boxCategory}>
                  {[
                    'Bút chì',
                    'Fanta',
                    'Sữa chua Yakult',
                    'Cá hồi đóng hộp',
                    'Dầu ăn Megan',
                    'Nước mắm',
                  ].map((item, index: number) => (
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(getProducts({product_name: item}));
                        navigation.navigate(
                          NameScreen.list_products_search_screen,
                          {
                            product_name: item,
                          },
                        );
                      }}
                      key={index}
                      activeOpacity={0.7}
                      style={styles.typoCategory}>
                      <Text style={[textStyles.p, {color: ColorStyles.orange}]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </VStack>
          </ScrollView>
        </TouchableWithoutFeedback>
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
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0.2,
  },
  boxCategory: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  typoCategory: {
    backgroundColor: ColorStyles.background_orange,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginRight: 30,
    marginBottom: 25,
    borderRadius: 18,
  },
});

export default SearchScreen;
