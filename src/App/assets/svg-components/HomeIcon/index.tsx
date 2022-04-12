import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function HomeIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.144 18.782v-3.067c0-.777.632-1.408 1.414-1.413h2.875c.786 0 1.423.633 1.423 1.413v3.058c0 .674.548 1.222 1.227 1.227h1.96a3.46 3.46 0 002.444-1 3.41 3.41 0 001.013-2.422V7.866c0-.735-.328-1.431-.895-1.902L11.943.673a3.115 3.115 0 00-3.958.071L1.467 5.964A2.474 2.474 0 00.5 7.865v8.703C.5 18.464 2.047 20 3.956 20h1.916c.327.002.641-.125.873-.354.232-.228.363-.54.363-.864h.036z"
        fill="url(#paint0_linear_192_2307)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_192_2307"
          x1={0.5}
          y1={-1.22807}
          x2={22.484}
          y2={2.00772}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#53E88B" />
          <Stop offset={1} stopColor="#15BE77" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default HomeIcon;
