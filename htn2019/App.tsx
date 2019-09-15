import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './Dashboard';
import Friends from './Friends';
import Challenges from './Challenges';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyACbHoFwRJbVZdY6udr3Xd5U4V3dUH5Bqc",
  authDomain: "wasteless-ad0ff.firebaseapp.com",
  databaseURL: "https://wasteless-ad0ff.firebaseio.com",
  storageBucket: "wasteless-ad0ff.appspot.com"
};

firebase.initializeApp(firebaseConfig);

const getThisWeek = (setThisWeek, thisWeek=true) => {
  const today = new Date();
  const month = today.getMonth()+1;
  const date = thisWeek ? today.getDate() : today.getDate() - 7;
  const addThisWeek = [];
  for (let i = 0; i < 7; i++) {
    const newDate = date - i;
    const queryString = `${today.getFullYear()}-${month}-${newDate}`;
    firebase.database().ref(`${queryString}/`).on('value', (snapshot) => {
      let sum = 0;
      snapshot.forEach((measurement) => {
        sum += measurement.val();
      })
      const avg = sum / snapshot.numChildren();
      if (thisWeek) {
        addThisWeek[i] = {day: `${month}/${newDate}`, waste: avg};
      } else {
        addThisWeek[i] = {day: `${month}/${newDate + 7}`, waste: avg};
      }

    }, (err) => console.log(err));
  }
  setTimeout(() => {
    setThisWeek(addThisWeek);
  }, 1000)
}

const DashboardIcon = () => <Ionicons name="md-podium" size={26} />
const FriendsIcon = () => <Ionicons name="md-people" size={26} />
const AccountIcon = () => <Ionicons name="md-person" size={26} />
const ChallengesIcon = () => <Ionicons name="md-ribbon" size={26}/>

const RouteConfigs: any = {
    Dashboard: { screen: Dashboard, navigationOptions: { tabBarIcon: DashboardIcon } },
    Challenges: { screen: Challenges, navigationOptions: { tabBarIcon: ChallengesIcon } },
    Friends: { screen: Friends, navigationOptions: { tabBarIcon: FriendsIcon } },
    Account: { screen: Challenges, navigationOptions: { tabBarIcon: AccountIcon } },
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
  const [thisWeek, setThisWeek] = useState(null);
  const [lastWeek, setLastWeek] = useState(null);
  useEffect(() => {
    getThisWeek(setThisWeek);
    getThisWeek(setLastWeek, false);
  }, []);
  return (
    <Container style={styles.container} screenProps={{thisWeek, lastWeek}} />
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
