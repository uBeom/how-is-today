import 'styled-components';

import {
  ColorsType,
  FontSizesType,
  FontWeightsType,
  LineHeightsType,
  LetterSpacingsType,
} from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    fontSizes: FontSizesType;
    fontWeights: FontWeightsType;
    lineHeights: LineHeightsType;
    letterSpacings: LetterSpacingsType;
  }
}
