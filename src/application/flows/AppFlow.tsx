import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ListFlow from './ListFlow';
import MoviesFlow from './MoviesFlow';
import ProfileFlow from './ProfileFlow';
import SearchFlow from './SearchFlow';

type AppTabsParamList = {
  Home: undefined;
  Search: undefined;
  List: undefined;
  Profile: undefined;
};

const AppNavigator = createBottomTabNavigator<AppTabsParamList>();

const AppTabsFlow = () => {
  return (
    <AppNavigator.Navigator>
      <AppNavigator.Screen name="Home" component={MoviesFlow} />
      <AppNavigator.Screen name="Search" component={SearchFlow} />
      <AppNavigator.Screen name="List" component={ListFlow} />
      <AppNavigator.Screen name="Profile" component={ProfileFlow} />
    </AppNavigator.Navigator>
  );
};

export default AppTabsFlow;
