import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MovieDetailsScreen from '../../features/movies/detail/MovieDetailsScreen';
import MoviesScreen from '../../features/movies/home/MoviesScreen';

type MoviesParamList = {
  Home: undefined;
  MovieDetails: undefined;
};

const MoviesNavigator = createNativeStackNavigator<MoviesParamList>();

const MoviesFlow = () => {
  return (
    <MoviesNavigator.Navigator>
      <MoviesNavigator.Screen name="Home" component={MoviesScreen} />
      <MoviesNavigator.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
      />
    </MoviesNavigator.Navigator>
  );
};

export default MoviesFlow;
