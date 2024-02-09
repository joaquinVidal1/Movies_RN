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
import PlayIcon from '../../../../res/PlayIcon.svg';
import Program from '../../../model/Program';
import {colors} from '../../shared/color';

export type Props = {
  movie: Program;
  style: StyleProp<ViewStyle>;
};

const SearchMovie: React.FC<Props> = ({movie, style}) => {
  const amountOfFilledStars =
    movie.voteAverage > 0 ? Math.floor(movie.voteAverage / 2) : 0;
  const showHalfStart = Math.round(movie.voteAverage) % 2 >= 1;
  return (
    <View style={[styles.container, style]}>
      <Image source={{uri: movie.backdropPath}} style={styles.imageStyle} />
      <View style={styles.dataContainer}>
        <Text style={styles.title} ellipsizeMode={'tail'}>
          {movie.title}
        </Text>
        <View style={styles.starsContainer}>
          {[...Array(amountOfFilledStars)].map((_, index) => (
            <FilledStarIcon key={`filled-${index}`} />
          ))}
          {showHalfStart && <HalfFilledStarIcon />}
        </View>
        <PlayIcon width={20} height={20} style={styles.playIconStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#0F0F0F',
    marginBottom: 2,
  },
  title: {
    color: colors.primaryColor,
    fontSize: 15,
    maxWidth: 120,
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
  },
  dataContainer: {
    marginStart: 30,
    alignSelf: 'center',
    flex: 1,
  },
  imageStyle: {
    height: 90,
    aspectRatio: 16 / 9,
  },
  playIconStyle: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginEnd: 40,
  },
});

export default SearchMovie;
