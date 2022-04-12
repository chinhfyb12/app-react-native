import React from 'react';
import {FC} from 'react';
import {Input, IInputProps, Icon} from 'native-base';
import {GestureResponderEvent} from 'react-native';
import {ColorStyles} from 'App/theme/colors';

type TypeInput = 'start-icon' | 'end-icon';
interface IInputCustomProps extends IInputProps {
  type?: TypeInput;
  icon?: any;
  onIconPress?: (e: GestureResponderEvent) => void;
}

const InputCustom: FC<IInputCustomProps> = ({
  type,
  icon,
  placeholder,
  onIconPress = () => {},
  ...props
}) => {
  const renderTypeInput = (type?: string) => {
    switch (type) {
      case 'start-icon': {
        return (
          <Input
            {...props}
            w={{base: '100%'}}
            InputLeftElement={<Icon onPress={onIconPress} as={icon} ml="2" />}
            borderWidth={0}
            backgroundColor={ColorStyles.background_primary}
            borderRadius={14}
            placeholder={placeholder}
          />
        );
      }
      case 'end-icon': {
        return (
          <Input
            {...props}
            w={{base: '100%'}}
            InputRightElement={<Icon onPress={onIconPress} as={icon} mr="2" />}
            borderWidth={0}
            backgroundColor={ColorStyles.background_primary}
            borderRadius={14}
            placeholder={placeholder}
          />
        );
      }
      default:
        return (
          <Input
            {...props}
            w={{base: '100%'}}
            borderWidth={0}
            backgroundColor={ColorStyles.background_primary}
            borderRadius={14}
            placeholder={placeholder}
          />
        );
    }
  };

  return <>{renderTypeInput(type)}</>;
};

export default InputCustom;
