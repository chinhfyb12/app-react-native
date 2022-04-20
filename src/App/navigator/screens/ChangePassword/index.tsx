import Background2 from 'App/assets/svg-components/Background2';
import React, {useEffect} from 'react';
import {
  Keyboard,
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
import {NameScreen} from 'App/constants';
import {updatePassword} from 'Utils/stores/profile/profile.creator';

const ChangePasswordScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation<any>();
  const toast = useToast();
  const dispatch = useDispatch();

  const {error, loading, message} = useSelector(
    (state: IAppState) => state.profileState,
  );

  const onSubmit = (value: any) => {
    Keyboard.dismiss();
    dispatch(updatePassword(value));
  };

  useEffect(() => {
    if (error) {
      toast.show({
        render: () => (
          <ToastCustom type="error" title="Thay đổi mật khẩu thất bại" />
        ),
        duration: 1500,
      });
    }
    if (message) {
      navigation.navigate(NameScreen.profile_screen);
    }
  }, [error, message]);

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
        <VStack space={4} display="flex" justifyContent="center" flex={1}>
          <Center>
            <Text style={textStyles.h2_bold}>Thay đổi mật khẩu</Text>
          </Center>
          <Box>
            <Text style={[textStyles.p, {marginBottom: 5}]}>
              Mật khẩu hiện tại
            </Text>
            <Controller
              control={control}
              name="prev_pwd"
              render={({field: {onChange, value}}) => (
                <InputCustom
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                  error={errors?.pre_pwd && errors?.pre_pwd?.message}
                />
              )}
              rules={{
                required: 'Vui lòng nhập mật khẩu hiện tại',
              }}
            />
          </Box>
          <Box>
            <Text style={[textStyles.p, {marginBottom: 5}]}>Mật khẩu mới</Text>
            <Controller
              control={control}
              name="new_pwd"
              render={({field: {onChange, value}}) => (
                <InputCustom
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                  error={errors?.new_pwd && errors?.new_pwd?.message}
                />
              )}
              rules={{
                required: 'Vui lòng nhập mật khẩu mới',
              }}
            />
          </Box>
          <Box>
            <ButtonCustom
              onPress={handleSubmit(onSubmit)}
              title="Lưu thay đổi"
            />
          </Box>
        </VStack>
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

export default ChangePasswordScreen;
