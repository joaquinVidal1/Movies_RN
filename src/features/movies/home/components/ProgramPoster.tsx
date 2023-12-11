import {Image} from 'expo-image';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TitleLogo from '../../../../../res/MovyTitle.svg';
import Program from '../../../../model/Program';

export type Props = {
  program: Program;
};

const ProgramPoster: React.FC<Props> = ({program}) => {
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
        }}
        colors={['transparent', 'black']}
        start={[1, 0.5]}
        end={[1, 1]}
      />
      <TitleLogo style={styles.title} />
      <View style={styles.genreContainer}>
        <Text style={styles.genreText}>Kids</Text>
        <Text style={styles.genreText}>Fantasy Movie</Text>
        <Text style={styles.genreText}>Action</Text>
      </View>
      <View style={styles.originalBadge}>
        <Text style={styles.originalText}>MOVY ORIGINAL</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>My List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
    position: 'absolute',
    bottom: 80,
  },
  genreText: {
    color: 'white',
    paddingHorizontal: 6,
  },
  originalBadge: {
    position: 'absolute',
    bottom: 120,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#0578FF',
    opacity: 30,
    borderRadius: 4,
  },
  originalText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProgramPoster;
