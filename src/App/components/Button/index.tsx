import React, {FC} from 'react';
import {Button, IButtonProps} from 'native-base';

interface IBtnProps extends IButtonProps {
  title: string;
}

const ButtonCustom: FC<IBtnProps> = ({title, ...props}) => (
  <Button {...props} borderRadius={10}>
    {title}
  </Button>
);

export default ButtonCustom;
