import Background2 from 'App/assets/svg-components/Background2';
import PlusIcon from 'App/assets/svg-components/PlusIcon';
import BackBtn from 'App/components/BackBtn';
import CardProduct from 'App/components/CardProduct';
import ButtonCustom from 'App/components/ItemCart/Button';
import ToastCustom from 'App/components/ToastCustom';
import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Box, Center, Pressable, useToast, VStack} from 'native-base';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';

const ProductDetail = () => {
  const toast = useToast();
  const id = 'toast-custom';

  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background2 />
      </View>
      <SafeAreaView style={{flex: 1, width: '100%', position: 'relative'}}>
        <View
          style={{
            marginVertical: heightPercentageToDP(2),
            paddingHorizontal: widthPercentageToDP(4),
            position: 'absolute',
            zIndex: 1,
            top: widthPercentageToDP(1),
            left: widthPercentageToDP(1),
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: ColorStyles.background_primary,
              borderRadius: 13,
            }}>
            <BackBtn color="#fff" bg={ColorStyles.primary} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor: '#fff'}}>
            <Image
              style={{
                width: '100%',
                height: 'auto',
                resizeMode: 'contain',
                aspectRatio: 1,
              }}
              source={{
                uri: 'https://res.cloudinary.com/dvmmmv32y/image/upload/v1649910243/products/559W87TKXIJPTM0ORYMN.jpg',
              }}
            />
            <VStack
              space={2}
              style={{
                paddingHorizontal: widthPercentageToDP(4),
                paddingTop: heightPercentageToDP(1),
              }}>
              <Text style={textStyles.p_bold}>Sản phẩm 1</Text>
              <Text style={textStyles.p}>10.000đ</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View>
                  <ButtonCustom
                    icon={
                      <View
                        style={{
                          height: 2,
                          width: widthPercentageToDP(2),
                          backgroundColor: '#fff',
                        }}
                      />
                    }
                  />
                </View>
                <View style={{marginHorizontal: 10}}>
                  <Text style={textStyles.p_bold}>1</Text>
                </View>
                <View>
                  <ButtonCustom icon={<PlusIcon />} />
                </View>
              </View>
            </VStack>
            <Pressable
              onPress={() => {
                if (!toast.isActive(id)) {
                  toast.show({
                    render: () => (
                      <ToastCustom
                        type="success"
                        title="Thêm vào giỏ hàng thành công ne"
                      />
                    ),
                    id,
                  });
                }
              }}>
              {({isPressed}) => (
                <View
                  style={[
                    styles.boxAddToCart,
                    {
                      transform: [
                        {
                          scale: isPressed ? 0.97 : 1,
                        },
                      ],
                    },
                  ]}>
                  <Text
                    style={[textStyles.p_bold, {color: ColorStyles.primary}]}>
                    Thêm vào giỏ hàng
                  </Text>
                </View>
              )}
            </Pressable>
          </View>
          <Box paddingLeft={4} paddingRight={4} paddingY={5}>
            <Center paddingTop={3}>
              <Text style={textStyles.h2_bold}>Sản phẩm liên quan</Text>
            </Center>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginTop: heightPercentageToDP(2),
              }}>
              {[1, 2, 3, 4, 5].map((_, index: number) => (
                <CardProduct
                  key={index}
                  style={{
                    width: '48%',
                    marginBottom: heightPercentageToDP(2),
                  }}
                  title="San pham 1"
                  img_url="https://res.cloudinary.com/dvmmmv32y/image/upload/v1649910243/products/559W87TKXIJPTM0ORYMN.jpg"
                  price={10000}
                />
              ))}
            </View>
          </Box>
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
  boxAddToCart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorStyles.background_primary,
    paddingVertical: heightPercentageToDP(1.6),
    borderColor: ColorStyles.primary,
    borderWidth: 1,
    marginTop: heightPercentageToDP(3),
  },
});

export default ProductDetail;
