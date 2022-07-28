import { css } from 'styled-components';

import { IFlex } from './type';

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
  ${({ justifyContent = 'flex-start', alignItems = 'stretch' }) => css`
    display: flex;
    justify-content: ${setJustifyContent(justifyContent)};
    align-items: ${setAlignItems(alignItems)};
  `}
`;

export default FlexStyle;
