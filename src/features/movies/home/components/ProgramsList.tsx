import React from 'react';
import {
  FlatList,
  StyleProp,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Program from '../../../../model/Program';
import {colors} from '../../../shared/color';
import ProgramCover from './ProgramCover';

export type Props = {
  programs: Program[];
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
  const {width: screenWidth} = useWindowDimensions();
  const itemWidth = (screenWidth - 33) / 4;
  console.log(itemWidth);

  return (
    <View style={[styles.container, {...style, marginStart: 0}]}>
      <Text style={[styles.title, {marginStart: style.marginStart}]}>
        {title}
      </Text>
      <FlatList
        contentContainerStyle={{
          marginStart: style.marginStart,
        }}
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
});

export default ProgramsList;
