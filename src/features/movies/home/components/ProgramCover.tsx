import React from 'react';
import {Image, StyleSheet, useWindowDimensions, View} from 'react-native';
import {ApiProgram} from '../../../../infraestructure/api/ApiProgram';
import {tokenValue} from '../../../../infraestructure/api/instance';

export type Props = {
  program: ApiProgram;
};

const ProgramCover: React.FC<Props> = ({program}) => {
  const {width} = useWindowDimensions();
  const imageWidth = (width - 33) / 4;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: program.poster_path,
          headers: {
            Authorization: `Bearer ${tokenValue}`,
          },
        }}
        style={[{width: imageWidth}, styles.image]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginEnd: 5,
  },

  image: {
    aspectRatio: 0.58,
    resizeMode: 'cover',
  },
});

export default ProgramCover;
