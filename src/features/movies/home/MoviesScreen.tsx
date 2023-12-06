import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const MoviesScreen = () => {
  const {colors} = useTheme();

  return (
    <SafeAreaView>
      <View>
        <Text style={{color: colors.text}}>Movies Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default MoviesScreen;
