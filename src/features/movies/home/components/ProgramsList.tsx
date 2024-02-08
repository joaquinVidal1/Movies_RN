import React from 'react';
import {FlatList, StyleSheet, Text, View, ViewStyle} from 'react-native';
import Program from '../../../../model/Program';
import {colors} from '../../../shared/color';
import ProgramCover from './ProgramCover';

export type Props = {
  programs: Program[];
  title: string;
  style: ViewStyle;
  onEndReached?: any;
};
const ProgramsList: React.FC<Props> = ({
  programs,
  title,
  style,
  onEndReached,
}) => {
  return (
    <View style={[styles.container, {...style, marginStart: 0}]}>
      <Text style={[styles.title, {marginStart: style.marginStart}]}>
        {title}
      </Text>
      <FlatList
        contentContainerStyle={[
          {
            marginStart: style.marginStart,
          },
          styles.contentContainer,
        ]}
        horizontal
        data={programs}
        keyExtractor={(program, index) =>
          program.id.toString() + index.toString()
        }
        renderItem={program => <ProgramCover program={program.item} />}
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
  contentContainer: {
    paddingEnd: 30,
  },
});

export default ProgramsList;
