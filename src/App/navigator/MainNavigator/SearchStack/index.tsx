import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NameScreen} from 'App/constants';
import SearchScreen from 'App/navigator/screens/SearchScreen';
import ListProductsSearch from 'App/navigator/screens/ListProductsSearch';
import ProductDetail from 'App/navigator/screens/ProductDetail';

const Stack = createStackNavigator();
export const SearchStack = () => (
  <Stack.Navigator
    screenOptions={{
      cardStyle: {backgroundColor: '#fff', elevation: 0},
      headerTitleAlign: 'center',
      headerShown: false,
    }}
    initialRouteName={NameScreen.search_screen}>
    <Stack.Screen name={NameScreen.search_screen} component={SearchScreen} />
    <Stack.Screen
      name={NameScreen.list_products_search_screen}
      component={ListProductsSearch}
    />
    <Stack.Screen
      name={NameScreen.product_detail_screen}
      component={ProductDetail}
    />
  </Stack.Navigator>
);
