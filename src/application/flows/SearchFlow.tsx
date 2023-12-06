import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SearchScreen from '../../features/search/SearchScreen';

type SearchParamsList = {
  Search: undefined;
};

const SearchNavigator = createNativeStackNavigator<SearchParamsList>();

const MoviesFlow = () => {
  return (
    <SearchNavigator.Navigator>
      <SearchNavigator.Screen name="Search" component={SearchScreen} />
    </SearchNavigator.Navigator>
  );
};

export default MoviesFlow;
