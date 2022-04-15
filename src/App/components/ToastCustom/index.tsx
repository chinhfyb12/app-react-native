import {ColorStyles} from 'App/theme/colors';
import {textStyles} from 'App/theme/textStyles';
import {Box, Center} from 'native-base';
import React, {FC} from 'react';
import {StatusBar, Text} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import {getStatusBarHeight} from 'react-native-status-bar-height';

type TypeToast = 'success' | 'warning' | 'error';

interface IToastCustomProps {
  title?: string;
  type?: TypeToast;
}

const ToastCustom: FC<IToastCustomProps> = ({title, type = 'success'}) => {
  return (
    <Center>
      <Box
        bg={
          type === 'success'
            ? ColorStyles.primary
            : type === 'error'
            ? ColorStyles.danger_bold
            : ColorStyles.orange
        }
        paddingY={3}
        display="flex"
        alignItems="center"
        borderRadius={10}
        paddingX={widthPercentageToDP(1)}
        marginBottom={getStatusBarHeight() + heightPercentageToDP(1)}
        justifyContent="center">
        <Text style={[textStyles.p, {color: '#fff'}]}>{title}</Text>
      </Box>
    </Center>
  );
};

export default ToastCustom;
