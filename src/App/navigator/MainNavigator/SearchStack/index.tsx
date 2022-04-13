import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NameScreen} from 'App/constants';
import SearchScreen from 'App/navigator/screens/SearchScreen';

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
  </Stack.Navigator>
);
