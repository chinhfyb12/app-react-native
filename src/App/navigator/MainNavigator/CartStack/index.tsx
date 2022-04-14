import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NameScreen} from 'App/constants';
import CartScreen from 'App/navigator/screens/CartScreen';
import ProductDetail from 'App/navigator/screens/ProductDetail';

const Stack = createStackNavigator();
export const CartStack = () => (
  <Stack.Navigator
    screenOptions={{
      cardStyle: {backgroundColor: '#fff', elevation: 0},
      headerTitleAlign: 'center',
      headerShown: false,
    }}
    initialRouteName={NameScreen.cart_screen}>
    <Stack.Screen name={NameScreen.cart_screen} component={CartScreen} />
    <Stack.Screen
      name={NameScreen.product_detail_screen}
      component={ProductDetail}
    />
  </Stack.Navigator>
);
