import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppTabsFlow from './flows/AppFlow';
import AuthFlow from './flows/AuthFlow';

function App() {
  const isUserLogged = false;

  return isUserLogged ? <AuthFlow /> : <AppTabsFlow />;
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
