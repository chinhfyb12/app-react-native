import * as React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function CartIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <G opacity={0.5} fillRule="evenodd" clipRule="evenodd">
        <Path
          opacity={0.4}
          d="M5.91 20.588c0-.84.68-1.52 1.52-1.52a1.515 1.515 0 11-1.52 1.52zm11.25 0c0-.84.68-1.52 1.52-1.52a1.515 1.515 0 11-1.52 1.52z"
          fill="url(#paint0_linear_192_2313)"
        />
        <Path
          d="M20.19 6.349c.61 0 1.01.21 1.41.67.4.46.47 1.12.38 1.719l-.95 6.56a2.552 2.552 0 01-2.53 2.19H7.59c-1.33 0-2.43-1.02-2.54-2.339L4.13 4.248l-1.51-.26a.753.753 0 01-.61-.86c.07-.41.46-.68.87-.62l2.386.36c.34.061.59.34.62.68l.19 2.24a.61.61 0 00.61.561H20.19zm-6.06 5.199h2.77c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75h-2.77c-.42 0-.75.33-.75.75 0 .41.33.75.75.75z"
          fill="url(#paint1_linear_192_2313)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_192_2313"
          x1={5.91064}
          y1={18.8824}
          x2={16.9209}
          y2={26.922}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#53E88B" />
          <Stop offset={1} stopColor="#15BE77" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_192_2313"
          x1={2}
          y1={1.5793}
          x2={24.6895}
          y2={6.2738}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#53E88B" />
          <Stop offset={1} stopColor="#15BE77" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default CartIcon;
