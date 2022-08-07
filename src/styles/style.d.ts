import 'styled-components';

import {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  devices,
} from '@/styles/theme';

type ColorsType = typeof colors;
type FontSizesType = typeof fontSizes;
type FontWeightsType = typeof fontWeights;
type LineHeightsType = typeof lineHeights;
type LetterSpacingsType = typeof letterSpacings;
type DevicesType = typeof devices;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    fontSizes: FontSizesType;
    fontWeights: FontWeightsType;
    lineHeights: LineHeightsType;
    letterSpacings: LetterSpacingsType;
    devices: DevicesType;
  }
}
