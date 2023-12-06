import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProfileScreen from '../../features/profile/PorfileScreen';

type ProfileStackParamsList = {
  Profile: undefined;
};

const ProfileNavigator = createNativeStackNavigator<ProfileStackParamsList>();

const ListFlow = () => {
  return (
    <ProfileNavigator.Navigator>
      <ProfileNavigator.Screen name="Profile" component={ProfileScreen} />
    </ProfileNavigator.Navigator>
  );
};

export default ListFlow;
