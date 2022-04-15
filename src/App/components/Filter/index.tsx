import FilterIcon from 'App/assets/svg-components/FilterIcon';
import {ColorStyles} from 'App/theme/colors';
import {Box, Pressable} from 'native-base';
import React, {FC} from 'react';
import {GestureResponderEvent} from 'react-native';
import {widthPercentageToDP} from 'Utils/helpers';

interface IFilterProps {
  onPress?: (e: GestureResponderEvent) => void;
}

const Filter: FC<IFilterProps> = ({onPress = () => {}}) => {
  return (
    <Pressable onPress={onPress}>
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
          <FilterIcon color={ColorStyles.primary} />
        </Box>
      )}
    </Pressable>
  );
};

export default Filter;
