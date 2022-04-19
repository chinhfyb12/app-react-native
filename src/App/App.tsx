import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {mainStack} from './navigator/MainNavigator';
import {extendTheme, Modal, NativeBaseProvider} from 'native-base';
import {ColorStyles} from './theme/colors';
import KeyboardManager from 'react-native-keyboard-manager';
import {useCheckToken} from './hooks/useCheckToken';
import Spinner from 'react-native-spinkit';
import {textStyles} from './theme/textStyles';

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
  useEffect(() => {
    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);
      KeyboardManager.setEnableDebugging(false);
      KeyboardManager.setKeyboardDistanceFromTextField(10);
      KeyboardManager.setEnableAutoToolbar(false);
      KeyboardManager.setToolbarPreviousNextButtonEnable(false);
      KeyboardManager.setShouldShowToolbarPlaceholder(false);
      KeyboardManager.setOverrideKeyboardAppearance(false);
      KeyboardManager.setShouldResignOnTouchOutside(false);
      KeyboardManager.setShouldPlayInputClicks(true);
      KeyboardManager.resignFirstResponder();
    }
  }, []);

  const {loading}: any = useCheckToken();

  return (
    <NativeBaseProvider theme={theme} config={config}>
      <View style={styles.root}>
        {loading ? (
          <Modal isOpen backgroundColor={ColorStyles.primary}>
            <Spinner isVisible size={40} color="#fff" type="9CubeGrid" />
            <Text style={[textStyles.h2_bold, {color: '#fff', marginTop: 10}]}>
              Supermarket Online
            </Text>
          </Modal>
        ) : (
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Root" component={mainStack} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
