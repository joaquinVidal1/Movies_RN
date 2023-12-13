import {Image} from 'expo-image';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InfoIcon from '../../../../../res/InfoIcon.svg';
import TitleLogo from '../../../../../res/MovyTitle.svg';
import DotIcon from '../../../../../res/Oval.svg';
import PlayIcon from '../../../../../res/PlayIcon.svg';
import PlusIcon from '../../../../../res/PlusIcon.svg';
import {useLatestMovie} from '../../../queries';

const ProgramPoster: React.FC = () => {
  const {data: program} = useLatestMovie();

  if (!program) {
    console.log('entro if');
    return <View></View>;
  }

  console.log('program: ', program);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: program.posterHighQualityPath,
        }}
        style={[styles.poster]}
      />
      <LinearGradient
        style={{
          flex: 1,
          width: '100%',
          aspectRatio: 2 / 3,
          position: 'absolute',
          top: 100,
        }}
        colors={['transparent', 'black', 'black']}
        start={[1, 0.5]}
        end={[1, 1]}
      />
      <TitleLogo style={styles.title} />
      <View style={styles.genreContainer}>
        {program.genres?.map(
          (genre, index) =>
            genre && (
              <View
                key={genre?.id}
                style={{flexDirection: 'row', alignItems: 'center'}}>
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
        <TouchableOpacity style={[styles.button, {marginTop: 5}]}>
          <PlusIcon style={{alignSelf: 'center'}} />
          <Text style={[styles.buttonText, {marginTop: 23}]}>My List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <PlayIcon />
          <Text style={[styles.buttonText, {marginTop: 11}]}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <InfoIcon style={{}} />
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
});

export default ProgramPoster;
