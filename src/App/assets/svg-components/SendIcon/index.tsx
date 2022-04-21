import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SendIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 2L11 13"
        stroke="url(#paint0_linear_169_28902)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2l-7 20-4-9-9-4 20-7z"
        stroke="url(#paint1_linear_169_28902)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_169_28902"
          x1={11}
          y1={1.32456}
          x2={23.6985}
          y2={3.292}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#53E88B" />
          <Stop offset={1} stopColor="#15BE77" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_169_28902"
          x1={2}
          y1={0.77193}
          x2={25.0881}
          y2={4.34909}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#53E88B" />
          <Stop offset={1} stopColor="#15BE77" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SendIcon;
