import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {colors} from '../features/shared/color';
import AppTabsFlow from './flows/AppFlow';
import AuthFlow from './flows/AuthFlow';

const MoviesTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primaryColor,
    background: colors.backgroundColor,
    text: colors.primaryColor,
  },
};

function App() {
  const isUserLogged = false;

  return isUserLogged ? <AuthFlow /> : <AppTabsFlow />;
}

export default () => {
  return (
    <NavigationContainer theme={MoviesTheme}>
      <SafeAreaProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.backgroundColor}
        />
        <App />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
