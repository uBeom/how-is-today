export interface IFlex {
  justifyContent: string;
  alignItems: string;
}
export interface ITextBTColor {
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  $bColor: string;
  $tColor: string;
}

export interface IText {
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}

export interface IBTColor {
  $bColor: string;
  $tColor: string;
}

export interface IColors {
  blue: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
  };
  gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
  };
  black: string;
  white: string;
}
