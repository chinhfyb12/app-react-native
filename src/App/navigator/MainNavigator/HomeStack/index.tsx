import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NameScreen} from 'App/constants';
import HomeScreen from 'App/navigator/screens/HomeScreen';
import ListProducts from 'App/navigator/screens/ListProducts';
import ProductDetail from 'App/navigator/screens/ProductDetail';

const Stack = createStackNavigator();
export const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      cardStyle: {backgroundColor: '#fff', elevation: 0},
      headerTitleAlign: 'center',
      headerShown: false,
    }}
    initialRouteName={NameScreen.home_screen}>
    <Stack.Screen name={NameScreen.home_screen} component={HomeScreen} />
    <Stack.Screen
      name={NameScreen.list_products_screen}
      component={ListProducts}
    />
    <Stack.Screen
      name={NameScreen.product_detail_screen}
      component={ProductDetail}
    />
  </Stack.Navigator>
);
