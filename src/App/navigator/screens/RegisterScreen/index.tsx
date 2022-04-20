import Background2 from 'App/assets/svg-components/Background2';
import React, {useEffect, useMemo, useState} from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
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
import CameraIcon from 'App/assets/svg-components/Camera';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import SelectCustom from 'App/components/SelectCustom';
import {IProfileDto} from 'Utils/stores/profile/profile.dto';
import {register} from 'Utils/stores/register/register.creator';

interface IDataSelect {
  value: string;
  label: string;
}

const RegisterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation<any>();
  const toast = useToast();
  const dispatch = useDispatch();

  const {error, loading, user} = useSelector(
    (state: IAppState) => state.registerState,
  );

  const dataGender: IDataSelect[] = useMemo(
    () => [
      {value: 'male', label: 'Nam'},
      {value: 'female', label: 'Nữ'},
    ],
    [],
  );

  const [previewImg, setPreviewImg] = useState<any>(null);

  const onSubmit = (value: any) => {
    const user: IProfileDto = {
      name: value?.name,
      email: value?.email,
      phone: value?.phone,
      password: value?.password,
      gender: value?.gender,
      address: value?.address,
    };
    if (previewImg) {
      user.avt_url = JSON.stringify(previewImg);
    }
    dispatch(register(user));
  };

  const pickImage = () => {
    const config: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: true,
    };

    const resultFun = (event: any) => {
      if (!event?.assets?.[0]) return;
      setPreviewImg(
        `data:${event?.assets?.[0].type};base64,${event?.assets?.[0].base64}`,
      );
    };
    launchImageLibrary(config, resultFun);
  };

  useEffect(() => {
    if (error) {
      toast.show({
        render: () => <ToastCustom type="error" title="Đăng ký thất bại" />,
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={4} display="flex" justifyContent="center" flex={1}>
            <Center>
              <Text style={textStyles.h2_bold}>Đăng ký</Text>
            </Center>
            <Center>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={pickImage}
                style={{
                  width: widthPercentageToDP(28),
                  height: widthPercentageToDP(28),
                  borderRadius: 100,
                  backgroundColor: '#ddd',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {previewImg ? (
                  <Image
                    style={{
                      width: widthPercentageToDP(28),
                      height: widthPercentageToDP(28),
                      borderRadius: 100,
                    }}
                    source={{
                      uri: `${previewImg}`,
                    }}
                  />
                ) : null}
                {previewImg ? null : (
                  <Box position="absolute">
                    <CameraIcon />
                  </Box>
                )}
              </TouchableOpacity>
            </Center>
            <View>
              <Text style={[textStyles.p, {marginBottom: 5}]}>Họ tên</Text>
              <Controller
                name="name"
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputCustom
                    onChangeText={onChange}
                    error={errors?.name && errors?.name?.message}
                    value={value}
                  />
                )}
                rules={{
                  required: 'Họ tên không được để trống',
                }}
              />
            </View>
            <View>
              <Text style={[textStyles.p, {marginBottom: 5}]}>Email</Text>
              <Controller
                name="email"
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputCustom
                    onChangeText={onChange}
                    error={errors?.email && errors?.email?.message}
                    value={value}
                  />
                )}
                rules={{
                  pattern: {
                    value:
                      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                    message: 'Email không hợp lệ',
                  },
                }}
              />
            </View>
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
            <View>
              <Text style={[textStyles.p, {marginBottom: 5}]}>Giới tính</Text>
              <Controller
                name="gender"
                control={control}
                render={({field: {onChange, value}}) => (
                  <SelectCustom
                    onValueChange={onChange}
                    selectedValue={value}
                    options={dataGender}
                  />
                )}
              />
            </View>
            <View>
              <Text style={[textStyles.p, {marginBottom: 5}]}>Địa chỉ</Text>
              <Controller
                name="address"
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputCustom
                    onChangeText={onChange}
                    error={errors?.address && errors?.address?.message}
                    value={value}
                  />
                )}
                rules={{
                  required: 'Vui lòng nhập địa chỉ',
                }}
              />
            </View>
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
              <ButtonCustom onPress={handleSubmit(onSubmit)} title="Đăng ký" />
            </Box>
          </VStack>
        </ScrollView>
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

export default RegisterScreen;
