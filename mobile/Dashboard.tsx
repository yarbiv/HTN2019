import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";
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
    const lastDay = lastWeek[6];
    const thisDay = thisWeek[6];

    const today = days[new Date().getDay()];
    const percentage = Math.round(thisDay.waste/lastDay.waste * 100);

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, marginBottom: 5, color: '#176cd4', fontWeight: 'bold'}} >Today:</Text>
            <ProgressCircle percent={Math.abs(percentage - 100)}
                            radius={100}
                            borderWidth={8}
                            color={percentage < 100 ? "#47ad39" : "red"} >
                <Text style={{textAlign: "center", width: '60%', fontWeight: 'bold', fontSize: 30}}>
                    {thisDay.waste} kg
                </Text>
                <Text style={{textAlign: "center", width: '80%'}} >
                    {percentage - 100}%
                    {lastDay.waste > thisDay.waste ?
                        ` waste compared to last ${today}!` :
                        ` increase from last ${today}.`
                    }
                </Text>
            </ProgressCircle>
            <Text style={{fontSize: 20, fontWeight: "bold", marginTop: 10, color: '#176cd4'}} >Last 7 days:</Text>
            <VictoryChart theme={VictoryTheme.material}>
                <VictoryAxis label="dates" style={{axisLabel: { padding: 30 }}} />
                <VictoryAxis dependentAxis style={{axisLabel: { padding: 30 }}}
                             fixLabelOverlap label="kg"/>
                <VictoryLine style={{
                    title: "Waste this week",
                    data: { stroke: "#d12440" },
                    parent: { border: "1px solid #ccc"}
                }} data={thisWeek} x="day" y="waste" />
                <VictoryLine style={{
                    title: "Waste last week",
                    data: { stroke: "grey", strokeDasharray: "5,5", fillOpacity: 0.5 }
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