import {StyleSheet} from 'react-native';
import {responsiveFontWidth} from 'Utils/helpers';

export const textStyles = StyleSheet.create({
  h1: {
    fontSize: responsiveFontWidth(5.5),
    fontWeight: '500',
    color: '#09051C',
  },
  h1_bold: {
    fontSize: responsiveFontWidth(5.5),
    fontWeight: 'bold',
    color: '#09051C',
  },
  h2: {
    fontSize: responsiveFontWidth(4.5),
    fontWeight: '500',

    color: '#09051C',
  },
  h2_bold: {
    fontSize: responsiveFontWidth(4.5),
    color: '#09051C',
    fontWeight: 'bold',
  },
  p: {
    fontSize: responsiveFontWidth(3.6),
    fontWeight: '500',
    color: '#09051C',
  },
  p_bold: {
    fontSize: responsiveFontWidth(3.6),
    color: '#09051C',

    fontWeight: 'bold',
  },
  label: {
    fontSize: responsiveFontWidth(3.2),
    fontWeight: '500',

    color: '#09051C',
  },
  label_bold: {
    fontSize: responsiveFontWidth(3.2),
    fontWeight: 'bold',
    color: '#09051C',
  },
  label_italic: {
    fontSize: responsiveFontWidth(3.2),
    fontWeight: '500',
    fontStyle: 'italic',
    color: '#09051C',
  },
});
