import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Box, Pressable, IPressableProps} from 'native-base';
import {widthPercentageToDP} from 'Utils/helpers';

interface IBtnProps extends IPressableProps {
  icon?: any;
}

const ButtonCustom: FC<IBtnProps> = ({icon, ...props}) => (
  <Pressable style={styles.root} {...props}>
    {({isPressed}) => (
      <Box
        bg={{
          linearGradient: {
            colors: ['#51E58A', '#18C178'],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        style={{
          borderRadius: 10,
          transform: [
            {
              scale: isPressed ? 0.94 : 1,
            },
          ],
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: widthPercentageToDP(8),
          height: widthPercentageToDP(8),
        }}>
        {icon && <Box>{icon}</Box>}
      </Box>
    )}
  </Pressable>
);

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    borderRadius: 14,
    width: '100%',
  },
});

export default ButtonCustom;
