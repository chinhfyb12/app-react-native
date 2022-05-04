import {useNavigation} from '@react-navigation/native';
import Background2 from 'App/assets/svg-components/Background2';
import BackIcon from 'App/assets/svg-components/BackIcon';
import {NameScreen} from 'App/constants';
import {textStyles} from 'App/theme/textStyles';
import {Box, Divider, VStack} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {widthPercentageToDP} from 'Utils/helpers';

const NotLogin = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background2 />
      </View>
      <SafeAreaView style={{flex: 1, width: '100%'}}>
        <VStack
          space={2}
          paddingBottom={2}
          paddingLeft={2}
          paddingRight={2}
          flex={1}>
          <View style={{marginTop: 20, marginBottom: 20}}>
            <Text style={[textStyles.h1_bold]}>Cá nhân</Text>
          </View>
          <Box backgroundColor="#fff" borderRadius={16}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.navigate(NameScreen.login_screen);
              }}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                paddingX={3}
                paddingY={3}
                justifyContent="space-between">
                <Text style={textStyles.p}>Đăng nhập</Text>
                <View style={styles.icon}>
                  <BackIcon width={8} heigth={12} />
                </View>
              </Box>
            </TouchableOpacity>
            <Divider bg="#EBE9F1" />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate(NameScreen.register_screen)}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                paddingX={3}
                paddingY={3}
                justifyContent="space-between">
                <Text style={textStyles.p}>Đăng ký</Text>
                <View style={styles.icon}>
                  <BackIcon width={8} heigth={12} />
                </View>
              </Box>
            </TouchableOpacity>
          </Box>
        </VStack>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F7F8FE',
    position: 'relative',
    paddingHorizontal: widthPercentageToDP(4),
    display: 'flex',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    opacity: 0.3,
  },
  icon: {
    transform: [{rotate: '180deg'}],
  },
});

export default NotLogin;
