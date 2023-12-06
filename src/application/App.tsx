import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AuthFlow from './flows/AuthFlow';
import MoviesFlow from './flows/MoviesFlow';

function App() {
  const isUserLogged = false;

  return isUserLogged ? <AuthFlow /> : <MoviesFlow />;
}

export default () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
          <App />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
