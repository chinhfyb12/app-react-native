import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NameScreen} from 'App/constants';
import ProfileScreen from 'App/navigator/screens/ProfileScreen';

const Stack = createStackNavigator();
export const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      cardStyle: {backgroundColor: '#fff', elevation: 0},
      headerTitleAlign: 'center',
      headerShown: false,
    }}
    initialRouteName={NameScreen.profile_screen}>
    <Stack.Screen name={NameScreen.profile_screen} component={ProfileScreen} />
  </Stack.Navigator>
);
