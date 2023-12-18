import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../shared/color';
import Header from './components/Header';

const SearchScreen = () => {
  return (
    <View>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: colors.primaryColor,
    fontSize: 16,
  },
});

export default SearchScreen;
