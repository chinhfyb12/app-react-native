import {useNavigation} from '@react-navigation/native';
import Background from 'App/assets/svg-components/Background';
import CardProduct from 'App/components/CardProduct';
import ItemCategory from 'App/components/ItemCategory';
import {NameScreen} from 'App/constants';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Box, ScrollView, VStack} from 'native-base';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background />
      </View>
      <SafeAreaView style={{flex: 1}}>
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
              <Text style={[textStyles.h2_bold, {color: ColorStyles.primary}]}>
                Find your favorite food
              </Text>
            </View>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              borderRadius={20}
              overflow="hidden"
              height={heightPercentageToDP(20)}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={require('App/assets/images/banner_1.png')}
              />
            </Box>
            <ItemCategory
              onViewMore={() =>
                navigation.navigate(NameScreen.list_products_screen)
              }
              title="Popular Menu"
            />
            <ItemCategory
              onViewMore={() =>
                navigation.navigate(NameScreen.list_products_screen)
              }
              title="Popular Restaurant"
            />
            <ItemCategory
              onViewMore={() =>
                navigation.navigate(NameScreen.list_products_screen)
              }
              title="Nearest Restaurant"
            />
          </VStack>
        </ScrollView>
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
});

export default HomeScreen;
