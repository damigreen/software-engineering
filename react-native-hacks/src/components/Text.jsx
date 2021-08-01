import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSceondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubHeading: {
    fontSize: theme.fontSize.subHeading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  textBackground: {
    backgroundColor: theme.colors.background,
  }
});

const Text = ({ color, fontSize, fontWeight, backgroundColor, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    backgroundColor === 'orangeBG' && styles.textBackground,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
