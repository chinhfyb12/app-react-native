import CartIcon_2 from 'App/assets/svg-components/CartIcon_2';
import {textStyles} from 'App/theme/textStyles';
import {Box, Center} from 'native-base';
import React from 'react';
import {Text} from 'react-native';

const NotFound = () => {
  return (
    <Box
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <Center>
        <Box mb={3}>
          <CartIcon_2 color="#E8E8E8" width={197} height={96} />
        </Box>
        <Text style={[textStyles.h2_bold, {color: '#696969', marginBottom: 3}]}>
          Không tìm thấy kết quả
        </Text>
        <Text style={[textStyles.p, {color: '#A9A9A9'}]}>
          Hãy thử lại với từ khóa tìm kiếm khác
        </Text>
      </Center>
    </Box>
  );
};

export default NotFound;
