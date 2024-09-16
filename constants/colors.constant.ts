const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#0A0A0A',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Palettes: {
  light: Palette,
  dark: Palette,
} = {
  light: {
    primary: '#FFD20A',
    primaryShade: '#FFC300',
    secondary: '#003566',
    secondaryShade: '#001D3D',
    light: '#EEF4ED',
    lightGray: '#3B3B3B',
    dark: '#FFFFFF',
    darkGray: '#1A1A1A',
    black: '#0A0A0A',
  },
  dark: {
    primary: '#FFD20A',
    primaryShade: '#FFC300',
    secondary: '#003566',
    secondaryShade: '#001D3D',
    light: '#EEF4ED',
    lightGray: '#3B3B3B',
    dark: '#000814',
    darkGray: '#1A1A1A',
    black: '#0A0A0A',
  }
}

export type Palette =  {
  primary: string,
  primaryShade: string,
  secondary: string,
  secondaryShade: string,
  light: string,
  lightGray: string,
  darkGray: string,
  dark: string,
  black: string,
}
