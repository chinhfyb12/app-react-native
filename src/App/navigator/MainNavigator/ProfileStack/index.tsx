import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NameScreen} from 'App/constants';
import ProfileScreen from 'App/navigator/screens/ProfileScreen';
import LoginScreen from 'App/navigator/screens/Login';
import RegisterScreen from 'App/navigator/screens/RegisterScreen';
import ChangePasswordScreen from 'App/navigator/screens/ChangePassword';

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
    <Stack.Screen name={NameScreen.login_screen} component={LoginScreen} />
    <Stack.Screen
      name={NameScreen.register_screen}
      component={RegisterScreen}
    />
    <Stack.Screen
      name={NameScreen.change_password_screen}
      component={ChangePasswordScreen}
    />
  </Stack.Navigator>
);
