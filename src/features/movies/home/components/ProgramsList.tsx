import React from 'react';
import {FlatList, StyleProp, StyleSheet, Text, View} from 'react-native';
import {ApiProgram} from '../../../../infraestructure/api/ApiProgram';
import {colors} from '../../../shared/color';
import ProgramCover from './ProgramCover';

export type Props = {
  programs: ApiProgram[];
  title: string;
  style: StyleProp<any>;
  onEndReached?: any;
};
const ProgramsList: React.FC<Props> = ({
  programs,
  title,
  style,
  onEndReached,
}) => {
  return (
    <View style={[style, styles.container]}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={programs}
        keyExtractor={(program, index) =>
          program.id.toLocaleString() + index.toString()
        }
        renderItem={program => <ProgramCover program={program.item} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    color: colors.primaryColor,
    fontSize: 18,
    marginBottom: 24,
  },
});

export default ProgramsList;
