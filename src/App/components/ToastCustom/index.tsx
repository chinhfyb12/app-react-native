import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Box, Center} from 'native-base';
import React, {FC} from 'react';
import {Text} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';

type TypeToast = 'success' | 'warning' | 'error';

interface IToastCustomProps {
  title?: string;
  type?: TypeToast;
}

const ToastCustom: FC<IToastCustomProps> = ({title, type = 'success'}) => {
  return (
    <Center width="100%">
      <Box
        bg={
          type === 'success'
            ? ColorStyles.primary
            : type === 'error'
            ? ColorStyles.danger_bold
            : ColorStyles.orange
        }
        width="95%"
        paddingY={3}
        display="flex"
        alignItems="center"
        borderRadius={10}
        paddingX={widthPercentageToDP(1)}
        mb={heightPercentageToDP(1)}
        justifyContent="center">
        <Text style={[textStyles.p, {color: '#fff'}]}>{title}</Text>
      </Box>
    </Center>
  );
};

export default ToastCustom;
