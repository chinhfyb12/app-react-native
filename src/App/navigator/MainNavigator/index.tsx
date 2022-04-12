import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeStack} from './HomeStack';
import {NameScreen} from 'App/constants';
import {ColorStyles} from 'App/theme/colors';
import HomeIcon from 'App/assets/svg-components/HomeIcon';
import SearchIcon from 'App/assets/svg-components/SearchIcon';
import {SearchStack} from './SearchStack';
import {NotificationStack} from './NotificationStack';
import NotificationIcon from 'App/assets/svg-components/NotificationIcon';
import {ProfileStack} from './ProfileStack';
import UserIcon from 'App/assets/svg-components/UserIcon';
import {responsiveFontWidth} from 'Utils/helpers';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 10,
      },
    }}>
    <Tab.Screen
      name="Trang chủ"
      component={HomeStack}
      options={{
        tabBarIcon: () => <HomeIcon />,
        tabBarActiveTintColor: ColorStyles.primary,
        tabBarActiveBackgroundColor: '#EAFAF2',
        tabBarItemStyle: {
          borderRadius: 10,
          marginVertical: 6,
        },
        tabBarShowLabel: false,
      }}
    />
    <Tab.Screen
      name="Tìm kiếm"
      component={SearchStack}
      options={{
        tabBarIcon: () => <SearchIcon />,
        tabBarActiveTintColor: ColorStyles.primary,
        tabBarActiveBackgroundColor: '#EAFAF2',
        tabBarItemStyle: {
          borderRadius: 10,
          marginVertical: 6,
        },
        tabBarShowLabel: false,
      }}
    />
    <Tab.Screen
      name="Thông báo"
      component={NotificationStack}
      options={{
        tabBarIcon: () => <NotificationIcon />,
        tabBarBadge: 1,
        tabBarBadgeStyle: {
          fontSize: responsiveFontWidth(2.5),
          top: 0,
        },
        tabBarActiveBackgroundColor: '#EAFAF2',
        tabBarItemStyle: {
          borderRadius: 10,
          marginVertical: 6,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: ColorStyles.primary,
      }}
    />
    <Tab.Screen
      name="Cá nhân"
      component={ProfileStack}
      options={{
        tabBarIcon: () => <UserIcon />,
        tabBarItemStyle: {
          borderRadius: 10,
          marginVertical: 6,
        },
        tabBarActiveBackgroundColor: '#EAFAF2',
        tabBarActiveTintColor: ColorStyles.primary,
        tabBarShowLabel: false,
      }}
    />
  </Tab.Navigator>
);

export const mainStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={NameScreen.home_screen}
      options={{headerShown: false}}
      component={BottomTabNavigator}
    />
  </Stack.Navigator>
);
