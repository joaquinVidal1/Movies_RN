import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Program from '../../../../model/Program';

export type Props = {
  program: Program;
};

const ProgramPoster: React.FC<Props> = ({program}) => {
  return (
    <Image
      source={{
        uri: program.posterHighQualityPath,
      }}
      style={[styles.poster]}
    />
  );
};

const styles = StyleSheet.create({
  poster: {
    width: '100%',
    aspectRatio: 2 / 3,
    // resizeMode: 'cover',
  },
});

export default ProgramPoster;
