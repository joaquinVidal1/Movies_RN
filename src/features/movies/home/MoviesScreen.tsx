import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {usePrograms} from '../../queries';

const MoviesScreen = () => {
  const {colors} = useTheme();
  const [makeRequest, setMakeRequest] = useState(false);
  const programs = usePrograms(makeRequest);
  console.log('Programs: ', programs?.data?.results);

  const headers = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmRjZGQzZWU5YjAwNjhhOGFmOTAyMzA5M2NiZDZiMSIsInN1YiI6IjY0ZWY4NjQ0Y2FhNTA4MDEyYjA1Y2E1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._ZJTzRooaFetAJFC1FY1MlS5nAndTRbwbwY3byymnko',
  };

  const handleOnPress = async () => {
    setMakeRequest(true);
  };

  // const handleOnPress = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://api.themoviedb.org/3/trending/all/day',
  //       {
  //         headers,
  //       },
  //     );

  //     const data = await response.json();
  //     console.log('Response data:', JSON.stringify(data, null, 2));
  //   } catch (error) {
  //     console.error('Request failed:', error);
  //   }
  // };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="FETCH" onPress={handleOnPress} />
    </View>
  );
};

export default MoviesScreen;
