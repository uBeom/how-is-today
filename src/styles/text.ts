import { css, DefaultTheme } from 'styled-components';

import { IText } from './type';

// const setColorBlue = (colors: IColors, value: string): string => {
//   switch (value) {
//     case '50':
//       return colors.blue[50];
//     case '100':
//       return colors.blue[100];
//     case '200':
//       return colors.blue[200];
//     case '300':
//       return colors.blue[300];
//     case '400':
//       return colors.blue[400];
//     case '500':
//       return colors.blue[500];
//     case '600':
//       return colors.blue[600];
//     default:
//       return value;
//   }
// };

// const setColorGray = (colors: IColors, value: string): string => {
//   switch (value) {
//     case '50':
//       return colors.gray[50];
//     case '100':
//       return colors.gray[100];
//     case '200':
//       return colors.gray[200];
//     case '300':
//       return colors.gray[300];
//     case '400':
//       return colors.gray[400];
//     case '500':
//       return colors.gray[500];
//     default:
//       return value;
//   }
// };

// const setColor = ({ colors }: DefaultTheme, color: string): string => {
//   const [name, value] = color.split(' ');

//   switch (name) {
//     case 'blue':
//       return setColorBlue(colors, value);
//     case 'gray':
//       return setColorGray(colors, value);
//     case 'black':
//       return colors.black;
//     case 'white':
//       return colors.white;
//     default:
//       return color;
//   }
// };

const setFontWeight = (
  { fontWeights }: DefaultTheme,
  fontWeight: string,
): string => {
  switch (fontWeight) {
    case 'regular':
      return fontWeights.regular;
    case 'medium':
      return fontWeights.medium;
    case 'bold':
      return fontWeights.bold;
    default:
      return fontWeight;
  }
};

const setFontSize = ({ fontSizes }: DefaultTheme, fontSize: string): string => {
  switch (fontSize) {
    case 'xs':
      return fontSizes.xs;
    case 'sm':
      return fontSizes.sm;
    case 'md':
      return fontSizes.md;
    case 'lg':
      return fontSizes.lg;
    case 'xl':
      return fontSizes.xl;
    case '2xl':
      return fontSizes['2xl'];
    default:
      return fontSize;
  }
};

const setLineHeight = (
  { lineHeights }: DefaultTheme,
  lineHeight: string,
): string => {
  switch (lineHeight) {
    case 'shorter':
      return lineHeights.shorter;
    case 'short':
      return lineHeights.short;
    case 'base':
      return lineHeights.base;
    case 'tall':
      return lineHeights.tall;
    case 'taller':
      return lineHeights.taller;
    case '3':
      return lineHeights[3];
    case '4':
      return lineHeights[4];
    default:
      return lineHeight;
  }
};

const setLetterSpacing = (
  { letterSpacings }: DefaultTheme,
  letterSpacing: string,
): string => {
  switch (letterSpacing) {
    case 'normal':
      return letterSpacings.normal;
    case 'wide':
      return letterSpacings.wide;
    case 'wider':
      return letterSpacings.wider;
    case 'widest':
      return letterSpacings.widest;
    default:
      return letterSpacing;
  }
};

/* color: ${setColor(theme, color)}; */
const TextStyle = css<IText>`
  ${({ theme, fontWeight, fontSize, lineHeight, letterSpacing }) => css`
    font-weight: ${setFontWeight(theme, fontWeight)};
    font-size: ${setFontSize(theme, fontSize)};
    line-height: ${setLineHeight(theme, lineHeight)};
    letter-spacing: ${setLetterSpacing(theme, letterSpacing)};
  `}
`;

export default TextStyle;
