import React, {FC} from 'react';
import {Box, IBoxProps} from 'native-base';
import {View} from 'react-native';

interface IPaperProps extends IBoxProps {}

const Paper: FC<IPaperProps> = ({children, ...props}) => (
  <Box
    borderRadius={10}
    style={{
      shadowColor: '#f4f6fc',
      shadowOffset: {
        width: 0,
        height: 18,
      },
      shadowOpacity: 1,
      shadowRadius: 16.0,
      elevation: 24,
    }}
    {...props}>
    <View style={{flex: 1, borderRadius: 16, overflow: 'hidden'}}>
      {children}
    </View>
  </Box>
);

export default Paper;
