import {StyleSheet} from 'react-native';
import {responsiveFontWidth} from 'Utils/helpers';

export const textStyles = StyleSheet.create({
  h1: {
    fontSize: responsiveFontWidth(5.5),
    fontWeight: '500',
    color: '#161E54',
  },
  h1_bold: {
    fontSize: responsiveFontWidth(5.5),
    fontWeight: 'bold',
    color: '#161E54',
  },
  h2: {
    fontSize: responsiveFontWidth(4.5),
    fontWeight: '500',

    color: '#161E54',
  },
  h2_bold: {
    fontSize: responsiveFontWidth(4.5),
    color: '#161E54',
    fontWeight: 'bold',
  },
  p: {
    fontSize: responsiveFontWidth(3.6),
    fontWeight: '500',
    color: '#161E54',
  },
  p_bold: {
    fontSize: responsiveFontWidth(3.6),
    color: '#161E54',

    fontWeight: 'bold',
  },
  label: {
    fontSize: responsiveFontWidth(3.2),
    fontWeight: '500',

    color: '#161E54',
  },
  label_bold: {
    fontSize: responsiveFontWidth(3.2),
    fontWeight: 'bold',
    color: '#161E54',
  },
  label_italic: {
    fontSize: responsiveFontWidth(3.2),
    fontWeight: '500',
    fontStyle: 'italic',
    color: '#161E54',
  },
});
