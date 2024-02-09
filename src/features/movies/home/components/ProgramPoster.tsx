import {Image} from 'expo-image';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InfoIcon from '../../../../../res/InfoIcon.svg';
import TitleLogo from '../../../../../res/MovyTitle.svg';
import DotIcon from '../../../../../res/Oval.svg';
import PlayIcon from '../../../../../res/PlayIcon.svg';
import PlusIcon from '../../../../../res/PlusIcon.svg';
import {useAddMovieToWatchlist, useLatestMovie} from '../queries/queries';

const ProgramPoster: React.FC = () => {
  const {data: program} = useLatestMovie();

  const {mutate: addMovieToWatchList} = useAddMovieToWatchlist();

  if (!program) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: program.poster_path,
        }}
        style={styles.poster}
      />
      <LinearGradient
        style={styles.linearGradient}
        colors={['transparent', 'black', 'black']}
        start={[1, 0.5]}
        end={[1, 1]}
      />
      <TitleLogo style={styles.title} />
      <View style={styles.genreContainer}>
        {program.genres?.map(
          (genre, index) =>
            genre && (
              <View key={genre?.id} style={styles.genre}>
                {index > 0 && <DotIcon />}
                <Text style={styles.genreText}>{genre?.name}</Text>
              </View>
            ),
        )}
      </View>
      <View style={styles.originalBadge}>
        <Text style={styles.originalText}>MOVY ORIGINAL</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.favouriteButton]}
          onPress={() => addMovieToWatchList(program?.id)}>
          <PlusIcon style={styles.plusIcon} />
          <Text style={[styles.buttonText, styles.plusText]}>My List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <PlayIcon />
          <Text style={[styles.buttonText, styles.playText]}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <InfoIcon />
          <Text style={styles.buttonText}>Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    aspectRatio: 2 / 3,
  },
  poster: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    aspectRatio: 2 / 3,
  },
  title: {
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
  },
  genreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  genreText: {
    color: 'white',
    paddingHorizontal: 6,
    fontSize: 16,
  },
  originalBadge: {
    marginBottom: 40,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'rgba(5, 120, 255, 0.3)',
    borderRadius: 4,
  },
  originalText: {
    color: '#0578FF',
    fontWeight: 'bold',
    opacity: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    alignSelf: 'center',
  },
  button: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    aspectRatio: 2 / 3,
    position: 'absolute',
    top: 100,
  },
  favouriteButton: {
    marginTop: 5,
  },
  genre: {flexDirection: 'row', alignItems: 'center'},
  plusIcon: {
    alignSelf: 'center',
  },
  plusText: {marginTop: 23},
  playText: {marginTop: 11},
});

export default ProgramPoster;
