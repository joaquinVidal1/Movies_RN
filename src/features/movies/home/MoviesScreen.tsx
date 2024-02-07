import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  useMyList,
  useTopRatedMovies,
  useTrendingPrograms,
  useUpcomingMovies,
} from '../../queries';
import InfiniteScrollingList from './components/InfiniteScrollingList';
import ProgramPoster from './components/ProgramPoster';
import ProgramsListContainer from './components/ProgramsListContainer';

const MoviesScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
        <ProgramPoster />
        <InfiniteScrollingList
          useGetPrograms={useMyList}
          title="My List"
          style={{...styles.list, marginTop: 43}}
        />
        <ProgramsListContainer
          useGetPrograms={useTrendingPrograms}
          title="Trending Now"
          style={styles.list}
        />
        <InfiniteScrollingList
          useGetPrograms={useUpcomingMovies}
          style={styles.list}
          title={'Upcoming'}
        />
        <InfiniteScrollingList
          useGetPrograms={useTopRatedMovies}
          style={{...styles.list, marginBottom: 60}}
          title={'Top Rated'}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginStart: 33,
    marginTop: 24,
  },
  container: {
    flex: 1,
  },
});

export default MoviesScreen;
