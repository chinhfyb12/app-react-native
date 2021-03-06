import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackIcon: React.FC<{color?: string; width?: number; heigth?: number}> = ({
  color = '#000',
  width = 10,
  heigth = 17,
}) => {
  return (
    <Svg width={width} height={heigth} viewBox="0 0 10 17" fill="none">
      <Path
        d="M3.636 8.182L10 14.546l-1.818 1.818L0 8.182 8.182 0 10 1.818 3.636 8.182z"
        fill={color}
      />
    </Svg>
  );
};

export default BackIcon;
