import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NameScreen} from 'App/constants';
import HomeScreen from 'App/navigator/screens/HomeScreen';

const Stack = createStackNavigator();
export const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      cardStyle: {backgroundColor: '#fff', elevation: 0},
      headerTitleAlign: 'center',
      headerShown: false,
    }}
    initialRouteName={NameScreen.home_screen}>
    <Stack.Screen name={NameScreen.home_screen} component={HomeScreen} />
  </Stack.Navigator>
);
