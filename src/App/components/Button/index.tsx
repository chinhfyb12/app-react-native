import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Box, Pressable} from 'native-base';

interface IBtnProps extends TouchableOpacityProps {
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
  <TouchableOpacity {...props} activeOpacity={0.6} style={styles.root}>
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
          style={{
            borderRadius: 15,
            transform: [
              {
                scale: isPressed ? 0.97 : 1,
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
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    borderRadius: 14,
    width: '100%',
  },
});

export default ButtonCustom;
