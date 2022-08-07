import { DefaultTheme } from 'styled-components';

export const colors = {
  blue: {
    50: '#f2f9fe',
    100: '#e3f2fd',
    200: '#64b5f6',
    300: '#42a5f5',
    400: '#2196f3',
    500: '#1e88e5',
    600: '#1976d2',
  },
  gray: {
    50: '#afbdd1',
    100: '#8997b1',
    200: '#56657f',
    300: '#313c4e',
    400: '#2b3648',
    500: '#212936',
  },
  black: '#000',
  white: '#fff',
};

export const fontWeights = {
  regular: '400',
  medium: '500',
  bold: '700',
};

export const fontSizes = {
  xs: '1rem',
  sm: '1.2rem',
  md: '1.4rem',
  lg: '1.6rem',
  xl: '2rem',
  '2xl': '2.4rem',
};

export const lineHeights = {
  shorter: '1.2rem',
  short: '1.5rem',
  base: '1.6rem',
  tall: '2.1rem',
  taller: '2.4rem',
  '3': '3rem',
  '4': '3.6rem',
};

export const letterSpacings = {
  normal: '0',
  wide: '0.01rem',
  wider: '0.015em',
  widest: '0.04em',
};

export const devices = {
  mobile: `(min-width: 375px)`,
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 1440px)`,
};

const theme: DefaultTheme = {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  devices,
};

export default theme;
