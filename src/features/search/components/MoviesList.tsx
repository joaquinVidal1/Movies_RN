import React from 'react';
import {FlatList, StyleSheet, View, ViewStyle} from 'react-native';
import Movie from '../../../model/Movie';
import {colors} from '../../shared/color';
import SearchMovie from './SearchMovie';

export type Props = {
  movies: Movie[];
  style: ViewStyle;
  onEndReached: () => void;
};
const MoviesList: React.FC<Props> = ({movies, style, onEndReached}) => {
  return (
    <View style={[styles.container, {...style, marginStart: 0}]}>
      <FlatList
        contentContainerStyle={{
          marginStart: style.marginStart,
        }}
        data={movies}
        keyExtractor={(program, index) =>
          program.id.toString() + index.toString()
        }
        renderItem={movie => <SearchMovie movie={movie.item} style={{}} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  title: {
    color: colors.primaryColor,
    fontSize: 18,
    marginBottom: 24,
  },
});

export default MoviesList;
