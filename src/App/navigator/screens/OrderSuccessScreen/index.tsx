import {useNavigation} from '@react-navigation/native';
import Background2 from 'App/assets/svg-components/Background2';
import SuccessIcon from 'App/assets/svg-components/SuccessIcon';
import ButtonCustom from 'App/components/Button';
import {NameScreen} from 'App/constants';
import {textStyles} from 'App/theme/textStyles';
import {Box, Center, VStack} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP} from 'Utils/helpers';
const OrderSuccessScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background2 />
      </View>
      <SafeAreaView style={{flex: 1, width: '100%'}}>
        <Center flex={1}>
          <VStack space={3}>
            <Center>
              <SuccessIcon />
            </Center>
            <Center>
              <Text style={textStyles.h2_bold}>Đặt hàng thành công</Text>
              <Text style={[textStyles.p, {textAlign: 'center', marginTop: 5}]}>
                Chúng tôi sẽ gọi điện để xác nhận lại đơn hàng của bạn. Xin cảm
                ơn!
              </Text>
            </Center>
            <Center>
              <Box width={widthPercentageToDP(30)}>
                <ButtonCustom
                  onPress={() => navigation.navigate(NameScreen.cart_screen)}
                  title="Trở lại"
                />
              </Box>
            </Center>
          </VStack>
        </Center>
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
});

export default OrderSuccessScreen;
