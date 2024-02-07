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
      <ScrollView bounces={false} contentContainerStyle={styles.scrollView}>
        <ProgramPoster />
        <InfiniteScrollingList
          useGetPrograms={useMyList}
          title="My List"
          style={{...styles.list, ...styles.firstList}}
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
          style={styles.list}
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
  scrollView: {
    paddingBottom: 60,
  },
  firstList: {
    marginTop: 43,
  },
});

export default MoviesScreen;
