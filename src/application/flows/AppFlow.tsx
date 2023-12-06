import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../../../res/Home.svg';
import MyListIcon from '../../../res/MyList.svg';
import ProfileIcon from '../../../res/Profile.svg';
import SearchIcon from '../../../res/Search.svg';
import {colors} from '../../features/shared/color';
import ListFlow from './ListFlow';
import MoviesFlow from './MoviesFlow';
import ProfileFlow from './ProfileFlow';
import SearchFlow from './SearchFlow';

type AppTabsParamList = {
  HomeFlow: undefined;
  SearchFlow: undefined;
  ListFlow: undefined;
  ProfileFlow: undefined;
};

const AppNavigator = createBottomTabNavigator<AppTabsParamList>();

const AppTabsFlow = () => {
  return (
    <AppNavigator.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.tabBarBackground,
        },
        tabBarActiveTintColor: colors.tabBarActiveColor,
        tabBarInactiveTintColor: colors.tabBarInactiveColor,
        tabBarShowLabel: false,
      }}>
      <AppNavigator.Screen
        name="HomeFlow"
        component={MoviesFlow}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon fill={focused ? 'red' : 'blue'} />
          ),
        }}
      />
      <AppNavigator.Screen
        name="SearchFlow"
        component={SearchFlow}
        options={{tabBarIcon: SearchIcon}}
      />
      <AppNavigator.Screen
        name="ListFlow"
        component={ListFlow}
        options={{tabBarIcon: MyListIcon}}
      />
      <AppNavigator.Screen
        name="ProfileFlow"
        component={ProfileFlow}
        options={{tabBarIcon: ProfileIcon}}
      />
    </AppNavigator.Navigator>
  );
};

export default AppTabsFlow;
