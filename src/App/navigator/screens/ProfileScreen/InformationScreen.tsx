import Background2 from 'App/assets/svg-components/Background2';
import BackIcon from 'App/assets/svg-components/BackIcon';
import EditIcon from 'App/assets/svg-components/EditIcon';
import InputCustom from 'App/components/Input';
import SelectCustom from 'App/components/SelectCustom';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Box, Center, Pressable, VStack} from 'native-base';
import React, {useEffect, useMemo} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import {IAppState} from 'Utils/stores/state';
import {Controller, useForm} from 'react-hook-form';

interface IDataSelect {
  value: string;
  label: string;
}

const InformationScreen = () => {
  const {profile} = useSelector((state: IAppState) => state.profileState);
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

  useEffect(() => {
    if (profile) {
      setValue('name', profile.name);
      setValue('email', profile.email);
      setValue('phone', profile.phone);
      setValue('address', profile.address);
      setValue('gender', profile.gender);
    }
  }, [profile]);

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
                  <Image
                    style={{
                      width: widthPercentageToDP(28),
                      height: widthPercentageToDP(28),
                      borderRadius: 100,
                    }}
                    source={{
                      uri: profile?.avt_url,
                    }}
                  />
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
                        defaultValue={value}
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
                  />
                </View>
              </VStack>
            </Box>
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
          </VStack>
        </ScrollView>
        <Pressable>
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
