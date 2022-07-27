import { css, DefaultTheme } from 'styled-components';

import { IText } from './type';

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

const TextStyle = css<IText>`
  ${({ theme, fontWeight, fontSize, lineHeight, letterSpacing }) => css`
    font-weight: ${setFontWeight(theme, fontWeight)};
    font-size: ${setFontSize(theme, fontSize)};
    line-height: ${setLineHeight(theme, lineHeight)};
    letter-spacing: ${setLetterSpacing(theme, letterSpacing)};
  `}
`;

export default TextStyle;
