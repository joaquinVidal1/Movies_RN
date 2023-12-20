import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import {tokenValue} from '../../../../infraestructure/api/instance';
import Program from '../../../../model/Program';

export type Props = {
  program: Program;
};

const ProgramCover: React.FC<Props> = ({program}) => {
  const [isLoading, setIsLoading] = useState(true);
  const {width} = useWindowDimensions();
  const imageWidth = (width - 33) / 4;

  useEffect(() => setIsLoading(true), [program]);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator />}
      <Image
        source={{
          uri: program.posterPath,
          headers: {
            Authorization: `Bearer ${tokenValue}`,
          },
        }}
        style={[{width: imageWidth}, styles.image, isLoading && {opacity: 0}]}
        onLoadEnd={() => setIsLoading(false)}
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
