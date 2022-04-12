import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusIcon: React.FC<{color?: string; width?: number; height?: number}> = ({
  color = '#fff',
  width = 11,
  height = 10,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 11 10" fill="none">
      <Path
        d="M4.41 4.286V0h1.43v4.286h4.285v1.428H5.839V10H4.411V5.714H.125V4.286h4.286z"
        fill={color}
      />
    </Svg>
  );
};

export default PlusIcon;
