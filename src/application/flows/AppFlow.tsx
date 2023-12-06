import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../../../res/Home';
import MyListIcon from '../../../res/MyList';
import ProfileIcon from '../../../res/Profile';
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

const AppTabsFlow: React.FC = () => {
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
        options={{tabBarIcon: HomeIcon}}
      />
      <AppNavigator.Screen
        name="SearchFlow"
        component={SearchFlow}
        options={{
          tabBarIcon: ({focused}) => (
            <SearchIcon
              color={
                focused ? colors.tabBarActiveColor : colors.tabBarInactiveColor
              }
            />
          ),
        }}
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
