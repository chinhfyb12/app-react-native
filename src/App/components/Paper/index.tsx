import React, {FC} from 'react';
import {Box, IBoxProps} from 'native-base';

interface IPaperProps extends IBoxProps {}

const Paper: FC<IPaperProps> = ({children, ...props}) => (
  <Box borderRadius={10} shadow={8} {...props}>
    {children}
  </Box>
);

export default Paper;
