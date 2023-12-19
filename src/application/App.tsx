import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {colors} from '../features/shared/color';
import QueryProvider from '../infraestructure/query/QueryProvideer';
import AppTabsFlow from './flows/AppFlow';
import AuthFlow from './flows/AuthFlow';
import MoviesTheme from './MoviesTheme';

function App() {
  const isUserLogged = false;

  return isUserLogged ? <AuthFlow /> : <AppTabsFlow />;
}

export default () => {
  return (
    <NavigationContainer theme={MoviesTheme}>
      <QueryProvider>
        <SafeAreaProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colors.backgroundColor}
          />
          <App />
        </SafeAreaProvider>
      </QueryProvider>
    </NavigationContainer>
  );
};
