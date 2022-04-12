import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from 'Utils/stores';
import {mainStack} from './navigator/MainNavigator';
import {extendTheme, NativeBaseProvider} from 'native-base';
import {ColorStyles} from './theme/colors';

const newColorTheme = {
  primay: ColorStyles.primary,
  secondary: ColorStyles.secondary,
  success: ColorStyles.success,
  danger: ColorStyles.danger,
  shadow: {
    8: {
      shadowColor: 'red',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    },
  },
};
const theme = extendTheme({colors: newColorTheme});
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme} config={config}>
        <View style={styles.root}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Root" component={mainStack} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </NativeBaseProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
