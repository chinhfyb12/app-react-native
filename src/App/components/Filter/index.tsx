import FilterIcon from 'App/assets/svg-components/FilterIcon';
import {ColorStyles} from 'App/theme/colors';
import {Box, Pressable} from 'native-base';
import React from 'react';
import {widthPercentageToDP} from 'Utils/helpers';

const Filter = () => {
  return (
    <Pressable>
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
