import Background from 'App/assets/svg-components/Background';
import CardProduct from 'App/components/CardProduct';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {ScrollView, VStack} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingHorizontal: 8}}>
          <VStack>
            <View style={{marginTop: 20}}>
              <Text
                style={[
                  textStyles.h1_bold,
                  {color: ColorStyles.primary, marginBottom: 6},
                ]}>
                Market Online
              </Text>
              <Text style={[textStyles.h2_bold, {color: ColorStyles.primary}]}>
                Find your favorite food
              </Text>
            </View>
            <View>
              <CardProduct />
            </View>
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    paddingHorizontal: 10,
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0.2,
  },
});

export default HomeScreen;
