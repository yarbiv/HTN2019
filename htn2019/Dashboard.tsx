import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import ProgressCircle from 'react-native-progress-circle';

const thisWeek: any[] = [
    { day: 'Mon', waste: 20 },
    { day: 'Tues', waste: 10 },
    { day: 'Wed', waste: 35 },
    { day: 'Thurs', waste: 5 },
    { day: 'Fri', waste: 45 },
    { day: 'Sat', waste: 12 },
    { day: 'Sun', waste: 5 },
];

const lastWeek: any[] = [
    { day: 'Mon', waste: 4 },
    { day: 'Tues', waste: 12 },
    { day: 'Wed', waste: 30 },
    { day: 'Thurs', waste: 9 },
    { day: 'Fri', waste: 55 },
    { day: 'Sat', waste: 20 },
    { day: 'Sun', waste: 14 },
];

const lastDay = lastWeek[6].waste;
const thisDay = thisWeek[6].waste;

// const percent = Math.round(Math.abs(lastDay - thisDay)/((lastDay+thisDay)/2) * 100)
const day = "Sunday";

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, textDecorationLine: "underline", marginBottom: 5}} >Today:</Text>
            <ProgressCircle percent={Math.round(thisDay/lastDay * 100)} radius={100}>
                <Text style={{textAlign: "center"}}>
                    {Math.round(thisDay/lastDay * 100) - 100}%
                    {lastDay > thisDay ?
                        ` waste compared to last ${day}!` :
                        ` increase from last ${day}.`
                    }
                </Text>
            </ProgressCircle>
            <Text style={{fontSize: 20, textDecorationLine: "underline", marginTop: 10,}} >Week of Sept. 8:</Text>
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