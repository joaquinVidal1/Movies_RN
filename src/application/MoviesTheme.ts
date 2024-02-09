import {DarkTheme} from '@react-navigation/native';
import {colors} from '../features/shared/color';

const MoviesTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primaryColor,
    background: colors.backgroundColor,
    text: colors.primaryColor,
  },
};

export default MoviesTheme;
