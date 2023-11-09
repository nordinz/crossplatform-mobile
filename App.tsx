// import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './src/screens/Home/HomeScreen';
// import DetailsScreen from './src/screens/Details/DetailsScreen';
import UserList from './src/screens/UserList/UserList';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/store/store';
// import CreateUser from './src/screens/CreateUser/CreateUser';
import { UserForm } from './src/components/UserForm/UserForm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserInfo } from './src/screens/UserInfo/UserInfo';
// import CreateUser from './src/screens/CreateUser/CreateUser';

const UserListStack = createNativeStackNavigator();

const UserListStackScreen = () => {
  return (
    <UserListStack.Navigator>
      <UserListStack.Screen name="UserList" component={UserList} />
      <UserListStack.Screen name="UserInfo" component={UserInfo} />
    </UserListStack.Navigator>
  );
};

const NavigationWrapper = () => {
  const loggedInAs = useSelector((state: any) => state.auth.loggedInAs);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'UserInfo') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'ShowUserList') {
            iconName = focused ? 'people-sharp' : 'people-outline';
          } else if (route.name === 'CreateUser') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {/* <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'HomeScreen' }}
          />
          <Tab.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: 'Details' }}
          /> */}
      <Tab.Screen name="ShowUserList" component={UserListStackScreen} />
      <Tab.Screen
        name="CreateUser"
        component={UserForm}
        options={{ headerShown: true }}
      />
      {loggedInAs && <Tab.Screen name="UserInfo" component={UserInfo} />}
    </Tab.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationWrapper />
      </NavigationContainer>
    </Provider>
  );
}
