import { css, DefaultTheme } from 'styled-components';

import { IColors, IBTColor } from './type';

const setColorBlue = (colors: IColors, value: string): string => {
  switch (value) {
    case '50':
      return colors.blue[50];
    case '100':
      return colors.blue[100];
    case '200':
      return colors.blue[200];
    case '300':
      return colors.blue[300];
    case '400':
      return colors.blue[400];
    case '500':
      return colors.blue[500];
    case '600':
      return colors.blue[600];
    default:
      return '';
  }
};

const setColorGray = (colors: IColors, value: string): string => {
  switch (value) {
    case '50':
      return colors.gray[50];
    case '100':
      return colors.gray[100];
    case '200':
      return colors.gray[200];
    case '300':
      return colors.gray[300];
    case '400':
      return colors.gray[400];
    case '500':
      return colors.gray[500];
    default:
      return '';
  }
};

const setColor = ({ colors }: DefaultTheme, color: string): string => {
  const [name, value] = color.split(' ');

  switch (name) {
    case 'blue':
      return setColorBlue(colors, value);
    case 'gray':
      return setColorGray(colors, value);
    case 'black':
      return colors.black;
    case 'white':
      return colors.white;
    default:
      return '';
  }
};

export const BTColorStyle = css<IBTColor>`
  ${({ theme, bColor, tColor }) => css`
    background-color: ${setColor(theme, bColor)};
    color: ${setColor(theme, tColor)};
  `}
`;
