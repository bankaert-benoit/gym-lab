/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';

import { Colors, Palette, Palettes } from '@/constants/colors.constant';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function useThemePalette(
  props: { light?: string; dark?: string },
  paletteName: keyof Palette
) {
  const theme = useColorScheme() ?? 'light';
  const paletteFromProps = props[theme];

  if (paletteFromProps) {
    return paletteFromProps;
  } else {
    return Palettes[theme][paletteName];
  }
}

export function usePalette(theme: 'light' | 'dark'): Palette {
  return Palettes[theme];
}
