import Background2 from 'App/assets/svg-components/Background2';
import BackBtn from 'App/components/BackBtn';
import CardProduct from 'App/components/CardProduct';
import Filter from 'App/components/Filter';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {VStack} from 'native-base';
import React, {FC} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';

interface IListProductsProps {}

const ListProducts: FC<IListProductsProps> = () => {
  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background2 />
      </View>
      <SafeAreaView style={{flex: 1, width: '100%'}}>
        <VStack space={2} paddingBottom={10} paddingLeft={2} paddingRight={2}>
          <View style={{marginTop: 20, marginBottom: 10}}>
            <Text
              style={[
                textStyles.h1_bold,
                {color: ColorStyles.primary, marginBottom: 6},
              ]}>
              Supermarket Online
            </Text>
            <Text style={[textStyles.h2_bold, {color: ColorStyles.primary}]}>
              Find your favorite food
            </Text>
          </View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <BackBtn />
              <Filter />
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={[textStyles.h2_bold, {marginTop: 5, marginBottom: 15}]}>
              Thực phẩm đóng hộp
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                paddingBottom: heightPercentageToDP(15),
              }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index: number) => (
                <CardProduct
                  key={index}
                  style={{width: '46%', marginBottom: heightPercentageToDP(3)}}
                  title="San pham 1"
                  img_url="https://tvmcomics.com.vn/wp-content/uploads/2019/11/anime-girl-ngau.jpg"
                  price={190000}
                />
              ))}
            </View>
          </ScrollView>
        </VStack>
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
    display: 'flex',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    opacity: 0.3,
  },
});

export default ListProducts;
