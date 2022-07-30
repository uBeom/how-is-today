import { css, DefaultTheme } from 'styled-components';

import { devices } from '../device';
import { IText } from './types';

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

const setFontSize = ({ fontSizes }: DefaultTheme, fontSize: string) => {
  switch (fontSize) {
    case 'xs':
      return css`
        font-size: ${fontSizes.xs};
      `;
    case 'sm':
      return css`
        font-size: ${fontSizes.sm};

        @media ${devices.tablet} {
          font-size: ${fontSizes.md};
        }
      `;
    case 'md':
      return css`
        font-size: ${fontSizes.md};

        @media ${devices.tablet} {
          font-size: ${fontSizes.lg};
        }
      `;
    case 'lg':
      return css`
        font-size: ${fontSizes.lg};

        @media ${devices.tablet} {
          font-size: ${fontSizes.xl};
        }
      `;
    case 'xl':
      return css`
        font-size: ${fontSizes.xl};
      `;
    default:
      return css`
        font-size: ${fontSizes['2xl']};
      `;
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
    default:
      return lineHeights[4];
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
    default:
      return letterSpacings.widest;
  }
};

const TextStyle = css<IText>`
  ${({ theme, fontWeight, fontSize, lineHeight, letterSpacing }) => css`
    font-weight: ${setFontWeight(theme, fontWeight)};
    line-height: ${setLineHeight(theme, lineHeight)};
    letter-spacing: ${setLetterSpacing(theme, letterSpacing)};
    ${setFontSize(theme, fontSize)};
  `}
`;

export default TextStyle;
