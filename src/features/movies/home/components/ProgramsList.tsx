import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import Program from '../../../../model/Program';
import {colors} from '../../../shared/color';
import ProgramCover from './ProgramCover';

export type Props = {
  programs: Program[];
  title: string;
  style: ViewStyle;
  onEndReached?: () => void;
};
const ProgramsList: React.FC<Props> = ({
  programs,
  title,
  style,
  onEndReached,
}) => {
  const {width} = useWindowDimensions();
  const imageWidth = (width - 33) / 4;

  return (
    <View style={[styles.container, {...style, marginStart: 0}]}>
      <Text style={[styles.title, {marginStart: style.marginStart}]}>
        {title}
      </Text>
      <View style={{height: 200}}>
        <FlashList
          horizontal
          data={programs}
          keyExtractor={(program, index) =>
            program.id.toString() + index.toString()
          }
          renderItem={program => <ProgramCover program={program.item} />}
          ListEmptyComponent={
            // FIXME: look for a better solution
            <View style={styles.loadersContainer}>
              {[1, 2, 3, 4].map(numer => (
                <ActivityIndicator style={{marginHorizontal: 30}} key={numer} />
              ))}
            </View>
          }
          estimatedItemSize={imageWidth}
          onEndReached={onEndReached}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
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
  loadersContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  contentContainer: {
    padding: 20,
  },
});

export default ProgramsList;
