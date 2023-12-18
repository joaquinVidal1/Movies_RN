import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MicIcon from '../../../../res/MicIcon.svg';
import SearchIcon from '../../../../res/SearchIcon.svg';
import {colors} from '../../shared/color';

export type Props = {
  onQueryChanged: (newQuery: string) => void;
};

const Header: React.FC<Props> = ({onQueryChanged}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.searchBar}>
          <TouchableOpacity style={{marginStart: 20}}>
            <SearchIcon />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            multiline={false}
            placeholderTextColor={colors.primaryColor}
            placeholder="Search for a movie that you love"
            onChangeText={onQueryChanged}
          />
          <TouchableOpacity style={{marginEnd: 20}}>
            <MicIcon />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.headerBackgroundColor,
    width: '100%',
  },
  searchBar: {
    alignContent: 'space-between',
    paddingTop: 20,
    flexDirection: 'row',
    width: '100%',
  },
  textInput: {
    color: colors.primaryColor,
    fontSize: 16,
    flex: 1,
    marginStart: 20,
  },
});

export default Header;
