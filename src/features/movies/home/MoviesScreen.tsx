import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  useMyList,
  useTopRatedMovies,
  useTrendingPrograms,
  useUpcomingMovies,
} from '../../queries';
import ProgramsList from './components/ProgramsList';

const MoviesScreen = () => {
  const trending = useTrendingPrograms();
  const myList = useMyList();
  const {data: upComingMovies, fetchNextPage} = useUpcomingMovies();
  const topRatedMovies = useTopRatedMovies();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <SafeAreaView>
        <ScrollView>
          <ProgramsList
            programs={myList.data}
            title="My List"
            style={styles.list}
          />
          <ProgramsList
            programs={trending.data}
            title="Trending Now"
            style={styles.list}
          />
          <ProgramsList
            programs={upComingMovies?.pages.flatMap(page => page.results)}
            title="Upcoming"
            style={styles.list}
            onEndReached={fetchNextPage}
          />
          <ProgramsList
            programs={topRatedMovies.data}
            title="Top Rated"
            style={styles.list}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginStart: 33,
    marginTop: 24,
  },
});

export default MoviesScreen;
