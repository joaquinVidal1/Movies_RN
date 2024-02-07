import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LogInScreen from '../../features/auth/logIn/LogInScreen';

type AuthParamList = {
  LogIn: undefined;
};

const AuthNavigator = createNativeStackNavigator<AuthParamList>();

const AuthFlow = () => {
  return (
    <AuthNavigator.Navigator>
      <AuthNavigator.Screen name="LogIn" component={LogInScreen} />
    </AuthNavigator.Navigator>
  );
};

export default AuthFlow;
