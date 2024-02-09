import {useDebounce} from '@uidotdev/usehooks';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import {useSearchMovies} from './queries/queries';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 200);
  const {data: pages, fetchNextPage} = useSearchMovies(debouncedQuery);

  return (
    <View>
      <Header onQueryChanged={setQuery} />
      <MoviesList
        movies={pages.flatMap(page => page.results)}
        style={styles.moviesList}
        onEndReached={fetchNextPage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  moviesList: {
    marginStart: 20,
  },
});

export default SearchScreen;
