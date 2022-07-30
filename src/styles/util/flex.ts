import { css } from 'styled-components';

import { IFlex } from './types';

const setJustifyContent = (justifyContent: string) => {
  switch (justifyContent) {
    case 'flexStart':
      return 'flex-start';
    case 'flexEnd':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'spaceBetween':
      return 'space-between';
    case 'spaceAround':
      return 'space-around';
    default:
      return justifyContent;
  }
};

const setAlignItems = (alignItems: string) => {
  switch (alignItems) {
    case 'stretch':
      return 'stretch';
    case 'flexStart':
      return 'flex-start';
    case 'flexEnd':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'baseLine':
      return 'baseline';
    default:
      return alignItems;
  }
};

const FlexStyle = css<IFlex>`
  ${({ justifyContent, alignItems }) => css`
    display: flex;
    justify-content: ${setJustifyContent(justifyContent as string)};
    align-items: ${setAlignItems(alignItems as string)};
  `}
`;

export default FlexStyle;
