import {DarkTheme} from '@react-navigation/native';
import {colors} from './color';

export const MoviesTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primaryColor,
    background: colors.backgroundColor,
    text: colors.primaryColor,
  },
};
