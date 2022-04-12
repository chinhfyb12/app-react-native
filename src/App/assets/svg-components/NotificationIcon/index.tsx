import * as React from 'react';
import Svg, {Path, Circle, Defs, LinearGradient, Stop} from 'react-native-svg';

function NotificationIcon() {
  return (
    <Svg width={20} height={24} viewBox="0 0 20 24" fill="none">
      <Path
        d="M16 9A6 6 0 104 9c0 7-3 9-3 9h18s-3-2-3-9z"
        stroke="url(#paint0_linear_192_2262)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.73 22a1.999 1.999 0 01-3.46 0"
        stroke="url(#paint1_linear_192_2262)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={16} cy={4} r={3.5} fill="#FF4545" stroke="#fff" />
      <Defs>
        <LinearGradient
          id="paint0_linear_192_2262"
          x1={1}
          y1={2.07895}
          x2={21.5672}
          y2={5.90284}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#53E88B" />
          <Stop offset={1} stopColor="#15BE77" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_192_2262"
          x1={8.26953}
          y1={21.9388}
          x2={11.4416}
          y2={23.6453}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#53E88B" />
          <Stop offset={1} stopColor="#15BE77" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default NotificationIcon;
