import {useNavigation, useRoute} from '@react-navigation/native';
import Background2 from 'App/assets/svg-components/Background2';
import BackIcon from 'App/assets/svg-components/BackIcon';
import {textStyles} from 'App/theme/textStyles';
import {Box, Center, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import {Controller, useForm} from 'react-hook-form';
import InputCustom from 'App/components/Input';
import ButtonCustom from 'App/components/Button';
import {NameScreen} from 'App/constants';

const AddressScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm();

  const onSubmit = (value: any) => {
    navigation.navigate(NameScreen.checkout_screen, {customer: value});
  };

  useEffect(() => {
    if (route.params?.customer) {
      const customer = route.params.customer;
      customer.name && setValue('name', customer.name);
      customer.phone && setValue('phone', customer.phone);
      customer.address && setValue('address', customer.address);
      customer.note && setValue('note', customer.note);
    }
  }, [route?.params?.customer]);

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
            paddingHorizontal: widthPercentageToDP(4),
          }}>
          <BackIcon />
          <Text style={[textStyles.p, {marginLeft: 10}]}>Trở lại</Text>
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={3} paddingX={3}>
            <Center>
              <Text style={textStyles.p_bold}>Thông tin nhận hàng</Text>
            </Center>
            <Box>
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
                  required: 'Vui lòng nhập tên',
                }}
              />
            </Box>
            <Box>
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
              <Text style={[textStyles.p, {marginBottom: 5}]}>Địa chỉ</Text>
              <Controller
                name="address"
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputCustom
                    onChangeText={onChange}
                    error={errors?.address && errors.address.message}
                    value={value}
                  />
                )}
                rules={{
                  required: 'Vui lòng nhập địa chỉ',
                }}
              />
            </Box>
            <Box>
              <Text style={[textStyles.p, {marginBottom: 5}]}>Ghi chú</Text>
              <Controller
                name="note"
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputCustom onChangeText={onChange} value={value} />
                )}
              />
            </Box>
            <Box marginTop={heightPercentageToDP(2)}>
              <ButtonCustom title="Lưu" onPress={handleSubmit(onSubmit)} />
            </Box>
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F7F8FE',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    opacity: 0.3,
  },
});

export default AddressScreen;
