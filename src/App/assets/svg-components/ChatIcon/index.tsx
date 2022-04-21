import {ColorStyles} from 'App/theme/colors';
import * as React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function ChatIcon() {
  return (
    <Svg width={30} height={30} viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.02 0C4.21 0 0 4.74 0 10c0 1.68.49 3.41 1.35 4.99.16.26.18.59.07.9l-.67 2.24c-.15.54.31.94.82.78l2.02-.6c.55-.18.98.05 1.491.36 1.46.86 3.279 1.3 4.919 1.3 4.96 0 10-3.83 10-10C20 4.65 15.7 0 10.02 0"
        fill="#00AB55"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.98 11.29c-.71-.01-1.28-.58-1.28-1.29 0-.7.58-1.28 1.28-1.27.71 0 1.28.57 1.28 1.28 0 .7-.57 1.28-1.28 1.28zm-4.61 0c-.7 0-1.28-.58-1.28-1.28 0-.71.57-1.28 1.28-1.28.71 0 1.28.57 1.28 1.28 0 .7-.57 1.27-1.28 1.28zm7.94-1.28c0 .7.57 1.28 1.28 1.28.71 0 1.28-.58 1.28-1.28 0-.71-.57-1.28-1.28-1.28-.71 0-1.28.57-1.28 1.28z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ChatIcon;
