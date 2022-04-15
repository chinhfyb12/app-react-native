const defaultSourceExts =
  require('metro-config/src/defaults/defaults').sourceExts;

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['./src'],
      },
    ],
    'jest-hoist',
    'react-native-reanimated/plugin',
  ],
};
