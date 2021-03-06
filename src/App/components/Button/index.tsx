import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Box, Pressable, IPressableProps} from 'native-base';

interface IBtnProps extends IPressableProps {
  title?: string;
  color?: string;
  icon?: any;
}

const ButtonCustom: FC<IBtnProps> = ({
  title,
  color = '#fff',
  icon,
  ...props
}) => (
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
          borderRadius: 15,
          transform: [
            {
              scale: isPressed ? 0.95 : 1,
            },
          ],
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 14,
          paddingHorizontal: 8,
        }}>
        {icon && <Box style={{marginRight: title ? 8 : 0}}>{icon}</Box>}
        {title && <Text style={{color, fontWeight: '700'}}>{title}</Text>}
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
