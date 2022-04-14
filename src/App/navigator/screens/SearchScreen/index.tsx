import Background from 'App/assets/svg-components/Background';
import SearchIcon from 'App/assets/svg-components/SearchIcon';
import InputCustom from 'App/components/Input';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {VStack} from 'native-base';
import React from 'react';
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

const SearchScreen = () => {
  const {control, handleSubmit} = useForm();

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
                      onChange={onChange}
                      value={value}
                      onSubmitEditing={Keyboard.dismiss}
                    />
                  )}
                />
              </View>
              <View>
                <Text style={textStyles.h2_bold}>Danh mục</Text>
                <View style={styles.boxCategory}>
                  {[
                    'Đồ uống',
                    'Thực phẩm đóng hộp',
                    'Gia vị',
                    'Đồ dùng cá nhân',
                  ].map((item, index: number) => (
                    <TouchableOpacity
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
