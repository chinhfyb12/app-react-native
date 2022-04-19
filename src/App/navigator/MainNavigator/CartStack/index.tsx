import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NameScreen} from 'App/constants';
import CartScreen from 'App/navigator/screens/CartScreen';
import ProductDetail from 'App/navigator/screens/ProductDetail';
import CheckoutScreen from 'App/navigator/screens/CheckoutScreen';
import AddressScreen from 'App/navigator/screens/AddressScreen';
import OrderSuccessScreen from 'App/navigator/screens/OrderSuccessScreen';

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
    <Stack.Screen
      name={NameScreen.checkout_screen}
      component={CheckoutScreen}
    />
    <Stack.Screen name={NameScreen.address_screen} component={AddressScreen} />
    <Stack.Screen
      name={NameScreen.success_screen}
      component={OrderSuccessScreen}
      options={{
        gestureEnabled: false,
      }}
    />
  </Stack.Navigator>
);
