import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useMyList, useTrendingPrograms} from '../../queries';
import ProgramsList from './components/ProgramsList';

const MoviesScreen = () => {
  const programs = useTrendingPrograms();
  const myList = useMyList();

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
            programs={programs.data}
            title="Trending Now"
            style={styles.list}
          />
          <ProgramsList
            programs={programs.data}
            title="Recently Added"
            style={styles.list}
          />
          <ProgramsList
            programs={programs.data}
            title="TV Series"
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
