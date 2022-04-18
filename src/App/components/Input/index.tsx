import React from 'react';
import {FC} from 'react';
import {Input, IInputProps, Icon} from 'native-base';
import {GestureResponderEvent, Text, View} from 'react-native';
import {ColorStyles} from 'App/theme/colors';
import {responsiveFontWidth} from 'Utils/helpers';

type TypeInput = 'start-icon' | 'end-icon';
interface IInputCustomProps extends IInputProps {
  type?: TypeInput;
  icon?: any;
  onIconPress?: (e: GestureResponderEvent) => void;
  error?: string;
}

const InputCustom: FC<IInputCustomProps> = ({
  type,
  icon,
  placeholder,
  error,
  onIconPress = () => {},
  ...props
}) => {
  const renderTypeInput = (type?: string) => {
    switch (type) {
      case 'start-icon': {
        return (
          <View>
            <Input
              {...props}
              w={{base: '100%'}}
              InputLeftElement={
                <Icon
                  onPress={onIconPress}
                  as={
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 14,
                      }}>
                      {icon}
                    </View>
                  }
                />
              }
              borderWidth={0}
              backgroundColor={ColorStyles.background_primary}
              borderRadius={14}
              paddingTop={4}
              paddingBottom={4}
              placeholder={placeholder}
              placeholderTextColor="#3FDA84"
            />
          </View>
        );
      }
      case 'end-icon': {
        return (
          <View>
            <Input
              {...props}
              w={{base: '100%'}}
              InputRightElement={
                <Icon
                  onPress={onIconPress}
                  as={
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 14,
                      }}>
                      {icon}
                    </View>
                  }
                />
              }
              borderWidth={0}
              backgroundColor={ColorStyles.background_primary}
              borderRadius={14}
              paddingTop={4}
              paddingBottom={4}
              placeholder={placeholder}
              placeholderTextColor="#3FDA84"
            />
          </View>
        );
      }
      default:
        return (
          <View>
            <Input
              {...props}
              w={{base: '100%'}}
              borderWidth={0}
              backgroundColor={ColorStyles.background_primary}
              borderRadius={14}
              paddingTop={4}
              paddingBottom={4}
              placeholder={placeholder}
              placeholderTextColor="#3FDA84"
            />
            {error && (
              <Text
                style={{
                  color: ColorStyles.danger_bold,
                  fontSize: responsiveFontWidth(3),
                  marginTop: 4,
                }}>
                {error}
              </Text>
            )}
          </View>
        );
    }
  };

  return <>{renderTypeInput(type)}</>;
};

export default InputCustom;
