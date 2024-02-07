import {useDebounce} from '@uidotdev/usehooks';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../shared/color';
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import {useSearchMovies} from './queries';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 200);
  const {data: movies, fetchNextPage} = useSearchMovies(debouncedQuery);

  return (
    <View>
      <Header onQueryChanged={setQuery} />
      <MoviesList
        movies={movies}
        style={{marginStart: 20}}
        onEndReached={fetchNextPage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: colors.primaryColor,
    fontSize: 16,
  },
});

export default SearchScreen;
