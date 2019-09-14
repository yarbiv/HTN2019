import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './Dashboard';
import Friends from './Friends';
import Challenges from './Challenges';

const DashboardIcon = () => <Ionicons name="md-podium" size={26} />
const FriendsIcon = () => <Ionicons name="md-people" size={26} />
const AccountIcon = () => <Ionicons name="md-person" size={26} />
const ChallengesIcon = () => <Ionicons name="md-ribbon" size={26}/>

const Test1 = () => <View><Text>No Way</Text></View>

const RouteConfigs: any = {
    Dashboard: { screen: Dashboard, navigationOptions: { tabBarIcon: DashboardIcon } },
    Challenges: { screen: Challenges, navigationOptions: { tabBarIcon: ChallengesIcon } },
    Friends: { screen: Friends, navigationOptions: { tabBarIcon: FriendsIcon } },
    Account: { screen: Test1, navigationOptions: { tabBarIcon: AccountIcon } },
}

const MaterialBottomTabNavigatorConfig: any = {
  initialRouteName: 'Dashboard',
  activeColor: '#000000',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#add8e6' },
  tabBarOptions: {
    showIcon: true
  },
}

const Nav = createMaterialBottomTabNavigator(RouteConfigs, MaterialBottomTabNavigatorConfig);
const Container = createAppContainer(Nav);

export default function App() {
  return (
    <Container style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
