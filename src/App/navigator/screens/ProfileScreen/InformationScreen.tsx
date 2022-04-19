import Background2 from 'App/assets/svg-components/Background2';
import BackIcon from 'App/assets/svg-components/BackIcon';
import EditIcon from 'App/assets/svg-components/EditIcon';
import InputCustom from 'App/components/Input';
import SelectCustom from 'App/components/SelectCustom';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Box, Center, Modal, Pressable, VStack} from 'native-base';
import React, {useEffect, useMemo, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import {IAppState} from 'Utils/stores/state';
import {Controller, useForm} from 'react-hook-form';
import ButtonCustom from 'App/components/Button';
import Spinner from 'react-native-spinkit';
import {
  clearProfile,
  updateProfile,
} from 'Utils/stores/profile/profile.creator';
import {setStorageToken} from 'Utils/helpers/storage';
import {IProfileDto} from 'Utils/stores/profile/profile.dto';

interface IDataSelect {
  value: string;
  label: string;
}

const InformationScreen = () => {
  const {profile, loading} = useSelector(
    (state: IAppState) => state.profileState,
  );
  const dataGender: IDataSelect[] = useMemo(
    () => [
      {value: 'male', label: 'Nam'},
      {value: 'female', label: 'Nữ'},
    ],
    [],
  );
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm();
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [previewImg, setPreviewImg] = useState<string | null>();

  useEffect(() => {
    if (profile) {
      profile?.avt_url && setPreviewImg(profile.avt_url);
      setValue('name', profile.name);
      setValue('email', profile.email);
      setValue('phone', profile.phone);
      setValue('address', profile.address);
      setValue('gender', profile.gender);
    }
  }, [profile]);

  const onSubmit = (value: any) => {
    setIsEdit(false);
    let createUserDto: IProfileDto = {} as IProfileDto;
    if (value?.name) {
      createUserDto.name = value.name;
    }
    if (value?.email) {
      createUserDto.email = value.email;
    }
    if (value?.phone) {
      createUserDto.phone = value.phone;
    }
    if (value?.gender) {
      createUserDto.gender = value.gender;
    }
    if (value?.address) {
      createUserDto.address = value.address;
    }
    if (previewImg) {
      createUserDto.avt_url = JSON.stringify(previewImg);
    }
    dispatch(updateProfile(createUserDto));
  };

  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background2 />
      </View>
      <SafeAreaView style={{flex: 1, width: '100%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack
            space={4}
            paddingBottom={2}
            paddingLeft={2}
            paddingRight={2}
            flex={1}>
            <View style={{marginTop: 20}}>
              <Text style={[textStyles.h1_bold]}>Cá nhân</Text>
            </View>
            <Box
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: widthPercentageToDP(5),
                paddingVertical: heightPercentageToDP(4),
                borderRadius: 18,
              }}>
              <VStack space={2}>
                <Center>
                  {previewImg ? (
                    <Image
                      style={{
                        width: widthPercentageToDP(28),
                        height: widthPercentageToDP(28),
                        borderRadius: 100,
                      }}
                      source={{
                        uri: previewImg,
                      }}
                    />
                  ) : null}
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
                        isDisabled={!isEdit}
                      />
                    )}
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
                        isDisabled={!isEdit}
                      />
                    )}
                  />
                </View>
                <View>
                  <Text style={[textStyles.p, {marginBottom: 5}]}>
                    Số điện thoại
                  </Text>
                  <Controller
                    name="phone"
                    control={control}
                    render={({field: {onChange, value}}) => (
                      <InputCustom
                        onChangeText={onChange}
                        error={errors?.phone && errors?.phone?.message}
                        value={value}
                        isDisabled={!isEdit}
                      />
                    )}
                  />
                </View>
                <View>
                  <Text style={[textStyles.p, {marginBottom: 5}]}>
                    Giới tính
                  </Text>
                  <Controller
                    name="gender"
                    control={control}
                    render={({field: {onChange, value}}) => (
                      <SelectCustom
                        onValueChange={onChange}
                        selectedValue={value}
                        options={dataGender}
                        isDisabled={!isEdit}
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
                        isDisabled={!isEdit}
                      />
                    )}
                  />
                </View>
                {isEdit && (
                  <Box marginTop={2}>
                    <ButtonCustom
                      onPress={handleSubmit(onSubmit)}
                      title="Lưu"
                    />
                  </Box>
                )}
              </VStack>
            </Box>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                dispatch(clearProfile());
                setStorageToken(null);
              }}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                style={{
                  paddingHorizontal: widthPercentageToDP(5),
                }}
                paddingTop={4}
                paddingBottom={4}
                backgroundColor={ColorStyles.danger}
                borderRadius={18}
                justifyContent="space-between">
                <Text style={[textStyles.p, {color: ColorStyles.danger_bold}]}>
                  Đăng xuất
                </Text>
                <View style={styles.icon}>
                  <BackIcon
                    width={8}
                    heigth={12}
                    color={ColorStyles.danger_bold}
                  />
                </View>
              </Box>
            </TouchableOpacity>
          </VStack>
        </ScrollView>
        {!isEdit && (
          <Pressable onPress={() => setIsEdit(!isEdit)}>
            {({isPressed}) => (
              <Box
                bg={{
                  linearGradient: {
                    colors: ['#51E58A', '#18C178'],
                    start: [0, 0],
                    end: [1, 0],
                  },
                }}
                height={widthPercentageToDP(15)}
                display="flex"
                justifyContent={'center'}
                alignItems={'center'}
                position="absolute"
                bottom={3}
                right={0}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.95 : 1,
                    },
                  ],
                }}
                borderRadius={50}
                width={widthPercentageToDP(15)}>
                <EditIcon color="#fff" />
              </Box>
            )}
          </Pressable>
        )}
        <Modal isOpen={loading}>
          <Spinner
            isVisible
            size={40}
            color={ColorStyles.primary}
            type="9CubeGrid"
          />
        </Modal>
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

export default InformationScreen;
