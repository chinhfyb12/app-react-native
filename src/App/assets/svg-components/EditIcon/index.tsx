import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function EditIcon({color = '#000', width = 16, height = 16}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.134 4.467l-6.667 6.667a.605.605 0 01-.467.2H5.334c-.4 0-.667-.267-.667-.667V8c0-.2.067-.333.2-.466L11.534.867a.644.644 0 01.933 0l2.667 2.667a.645.645 0 010 .933zM14 9.8v3.534c0 1.133-.866 2-2 2H2.667c-1.133 0-2-.867-2-2V4c0-1.133.867-2 2-2H6.2c.4 0 .667.267.667.667s-.267.667-.667.667H2.667C2.267 3.334 2 3.6 2 4v9.334c0 .4.267.666.667.666H12c.4 0 .667-.266.667-.666V9.8c0-.4.267-.666.667-.666S14 9.4 14 9.8zm-2-7.533L13.734 4l-6 6H6V8.267l6-6z"
        fill={color}
      />
    </Svg>
  );
}

export default EditIcon;
