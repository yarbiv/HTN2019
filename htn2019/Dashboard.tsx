import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import ProgressCircle from 'react-native-progress-circle';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Dashboard = (props) => {
    if (!props.screenProps.lastWeek || !props.screenProps.thisWeek) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="darkblue" />
            </View>
        );
    }
    const { lastWeek, thisWeek } = props.screenProps;
    lastWeek.reverse();
    thisWeek.reverse();
    const lastDay = lastWeek[6];
    const thisDay = thisWeek[6];

    const today = days[new Date().getDay()];

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, textDecorationLine: "underline", marginBottom: 5, color: '#add8e6'}} >Today:</Text>
            <ProgressCircle percent={Math.round(thisDay/lastDay * 100)} radius={100}>
                <Text style={{textAlign: "center"}}>
                    {Math.round(thisDay.waste/lastDay.waste * 100) - 100}%
                    {lastDay.waste > thisDay.waste ?
                        ` waste compared to last ${today}!` :
                        ` increase from last ${today}.`
                    }
                </Text>
            </ProgressCircle>
            <Text style={{fontSize: 20, textDecorationLine: "underline", marginTop: 10, color: '#add8e6'}} >Last 7 days:</Text>
            <VictoryChart theme={VictoryTheme.material}>
                <VictoryLine style={{
                    title: "Waste this week",
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc"}
                }} data={thisWeek} x="day" y="waste" />
                <VictoryLine style={{
                    title: "Waste last week",
                    data: { stroke: "blue", strokeDasharray: "5,5", fillOpacity: 0.5 }
                }} data={lastWeek} x="day" y="waste" />
            </VictoryChart>
        </View>
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
  
export default Dashboard;