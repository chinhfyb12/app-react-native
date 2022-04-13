import {useNavigation} from '@react-navigation/native';
import BackIcon from 'App/assets/svg-components/BackIcon';
import {ColorStyles} from 'App/theme/colors';
import {Pressable, Box} from 'native-base';
import React from 'react';
import {widthPercentageToDP} from 'Utils/helpers';

const BackBtn = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      {({isPressed}) => (
        <Box
          style={{
            borderRadius: 13,
            transform: [
              {
                scale: isPressed ? 0.9 : 1,
              },
            ],
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: ColorStyles.background_primary,
            width: widthPercentageToDP(10),
            height: widthPercentageToDP(10),
          }}>
          <BackIcon color={ColorStyles.primary} />
        </Box>
      )}
    </Pressable>
  );
};

export default BackBtn;
