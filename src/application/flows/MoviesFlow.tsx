import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MovieDetailsScreen from '../../features/movies/detail/MovieDetailsScreen';
import MoviesScreen from '../../features/movies/home/MoviesScreen';

type MoviesParamList = {
  Home: undefined;
  MovieDetails: undefined;
};

const AuthNavigator = createNativeStackNavigator<MoviesParamList>();

const MoviesFlow = () => {
  return (
    <AuthNavigator.Navigator>
      <AuthNavigator.Screen name="Home" component={MoviesScreen} />
      <AuthNavigator.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
      />
    </AuthNavigator.Navigator>
  );
};

export default MoviesFlow;
