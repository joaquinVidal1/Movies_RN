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
  const upComing = useUpcomingMovies();
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
            programs={upComing.data}
            title="Upcoming"
            style={styles.list}
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
