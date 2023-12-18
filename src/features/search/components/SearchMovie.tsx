import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import FilledStarIcon from '../../../../res/FilledStar.svg';
import HalfFilledStarIcon from '../../../../res/HalfFilledStar.svg';
import Movie from '../../../model/Movie';
import {colors} from '../../shared/color';

export type Props = {
  movie: Movie;
  style: StyleProp<ViewStyle>;
};

const SearchMovie: React.FC<Props> = ({movie, style}) => {
  const amountOfFilledStars = Math.floor(movie.vote_average / 2);
  const showHalfStart = Math.round(movie.vote_average) % 2 >= 1;

  return (
    <View style={[styles.container, style]}>
      <Image source={{uri: movie.backdropPath}} />
      <View>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.starsContainer}>
          {[...Array(amountOfFilledStars)].map((_, index) => (
            <FilledStarIcon key={`filled-${index}`} />
          ))}
          {showHalfStart && <HalfFilledStarIcon />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#0F0F0F',
  },
  title: {
    color: colors.primaryColor,
  },
  starsContainer: {
    flexDirection: 'row',
  },
});

export default SearchMovie;
