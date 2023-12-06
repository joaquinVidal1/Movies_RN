import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ListScreen from '../../features/list/ListScreen';

type ListStackParamsList = {
  List: undefined;
};

const ListNavigator = createNativeStackNavigator<ListStackParamsList>();

const ListFlow = () => {
  return (
    <ListNavigator.Navigator>
      <ListNavigator.Screen name="List" component={ListScreen} />
    </ListNavigator.Navigator>
  );
};

export default ListFlow;
