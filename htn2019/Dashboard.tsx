import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text>
                Test123
            </Text>
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