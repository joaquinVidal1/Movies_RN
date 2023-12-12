import React from 'react';
import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import {
  useMyList,
  useTopRatedMovies,
  useTrendingPrograms,
  useUpcomingMovies,
} from '../../queries';
import ProgramPoster from './components/ProgramPoster';
import ProgramsList from './components/ProgramsList';

const MoviesScreen = () => {
  const trendingProgramsResult = useTrendingPrograms();
  const isLoading = trendingProgramsResult.isLoading;
  const [topTrendingProgram, ...trendingPrograms] =
    trendingProgramsResult.isSuccess ? trendingProgramsResult.data : [];
  const myList = useMyList();
  const {data: upComingMovies, fetchNextPage: fetchMoreUpcomingMovies} =
    useUpcomingMovies();
  const {data: topRatedMovies, fetchNextPage: fetchMoreTopRatedMovies} =
    useTopRatedMovies();

  const {height} = useWindowDimensions();

  if (trendingProgramsResult.isLoading) return <></>;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} bounces={false}>
        <ProgramPoster program={topTrendingProgram} />
        {/* <ProgramsList
          programs={myList.data}
          title="My List"
          style={{...styles.list, marginTop: 83}}
        /> */}
        <ProgramsList
          programs={trendingPrograms}
          title="Trending Now"
          style={styles.list}
        />
        <ProgramsList
          programs={upComingMovies}
          title="Upcoming"
          style={styles.list}
          onEndReached={fetchMoreUpcomingMovies}
        />
        <ProgramsList
          programs={topRatedMovies}
          title="Top Rated"
          style={{...styles.list, marginBottom: 65}}
          onEndReached={fetchMoreTopRatedMovies}
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
  scrollView: {},
});

export default MoviesScreen;
