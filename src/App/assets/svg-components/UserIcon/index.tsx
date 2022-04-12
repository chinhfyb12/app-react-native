import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function UserIcon() {
  return (
    <Svg width={16} height={20} viewBox="0 0 16 20" fill="none">
      <Path
        d="M7.997 13.175c-4.313 0-7.997.68-7.997 3.4C0 19.295 3.661 20 7.997 20c4.313 0 7.997-.68 7.997-3.4 0-2.721-3.66-3.425-7.997-3.425"
        fill="url(#paint0_linear_192_2318)"
      />
      <Path
        opacity={0.4}
        d="M7.997 10.584a5.273 5.273 0 005.292-5.292A5.273 5.273 0 007.997 0a5.274 5.274 0 00-5.292 5.292 5.274 5.274 0 005.292 5.292"
        fill="url(#paint1_linear_192_2318)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_192_2318"
          x1={-2.26803e-8}
          y1={12.7556}
          x2={16.7046}
          y2={18.8208}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#53E88B" />
          <Stop offset={1} stopColor="#15BE77" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_192_2318"
          x1={2.70508}
          y1={-0.650139}
          x2={14.9233}
          y2={1.2429}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#53E88B" />
          <Stop offset={1} stopColor="#15BE77" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default UserIcon;
