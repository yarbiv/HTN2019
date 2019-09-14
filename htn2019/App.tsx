import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './Dashboard';
import Friends from './Friends';


const AccountIcon = () => <Ionicons name="contact" size={32} />
const Test1 = () => <View><Text>No Way</Text></View>

const RouteConfigs: any = {
    Dashboard: { screen: Dashboard },
    You: { screen: Test1, tabBarIcon: AccountIcon },
    Friends: { screen: Friends },
}

const MaterialBottomTabNavigatorConfig: any = {
  initialRouteName: 'Dashboard',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
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
