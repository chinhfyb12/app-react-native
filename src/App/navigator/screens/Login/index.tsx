import Background2 from 'App/assets/svg-components/Background2';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {widthPercentageToDP} from 'Utils/helpers';
import {useForm, Controller} from 'react-hook-form';
import {Box, Center, Modal, useToast, VStack} from 'native-base';
import InputCustom from 'App/components/Input';
import {textStyles} from 'App/theme/textStyles';
import BackIcon from 'App/assets/svg-components/BackIcon';
import {useNavigation} from '@react-navigation/native';
import ButtonCustom from 'App/components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from 'Utils/stores/state';
import Spinner from 'react-native-spinkit';
import {ColorStyles} from 'App/theme/colors';
import ToastCustom from 'App/components/ToastCustom';
import {login} from 'Utils/stores/login/login.creator';
import {NameScreen} from 'App/constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation<any>();
  const toast = useToast();
  const dispatch = useDispatch();

  const {error, loading, user} = useSelector(
    (state: IAppState) => state.loginState,
  );

  const onSubmit = (value: any) => {
    dispatch(login(value));
  };

  useEffect(() => {
    if (error) {
      toast.show({
        render: () => <ToastCustom type="error" title="Đăng nhập thất bại" />,
        duration: 1500,
      });
    }
    if (user?.access_token) {
      navigation.navigate(NameScreen.profile_screen);
    }
  }, [error, user]);

  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background2 />
      </View>
      <SafeAreaView style={{flex: 1, width: '100%'}}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={{
            marginTop: 20,
            marginBottom: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <BackIcon />
          <Text style={[textStyles.p, {marginLeft: 10}]}>Trở lại</Text>
        </TouchableOpacity>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <VStack space={4} display="flex" justifyContent="center" flex={1}>
            <Center>
              <Text style={textStyles.h2_bold}>Đăng nhập</Text>
            </Center>
            <Box>
              <Text style={[textStyles.p, {marginBottom: 5}]}>
                Số điện thoại
              </Text>
              <Controller
                control={control}
                name="phone"
                render={({field: {onChange, value}}) => (
                  <InputCustom
                    onChangeText={onChange}
                    value={value}
                    error={errors?.phone && errors?.phone?.message}
                    keyboardType="number-pad"
                  />
                )}
                rules={{
                  required: 'Vui lòng nhập số điện thoại',
                  pattern: {
                    value: /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
                    message: 'Nhập đúng định dạng',
                  },
                }}
              />
            </Box>
            <Box>
              <Text style={[textStyles.p, {marginBottom: 5}]}>Mật khẩu</Text>
              <Controller
                control={control}
                name="password"
                render={({field: {onChange, value}}) => (
                  <InputCustom
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry
                    error={errors?.password && errors?.password?.message}
                  />
                )}
                rules={{
                  required: 'Vui lòng nhập mật khẩu',
                }}
              />
            </Box>
            <Box>
              <ButtonCustom
                onPress={handleSubmit(onSubmit)}
                title="Đăng nhập"
              />
            </Box>
          </VStack>
        </KeyboardAwareScrollView>
      </SafeAreaView>
      <Modal isOpen={loading}>
        <Spinner
          isVisible
          size={40}
          color={ColorStyles.primary}
          type="9CubeGrid"
        />
      </Modal>
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

export default LoginScreen;
