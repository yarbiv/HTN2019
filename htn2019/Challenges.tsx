import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const challenges: any[] = [
    { key: 'Reduce Friday\'s waste by 500 grams', score: 102 },
    { key: 'Keep up your streak of less than 60kg per week!', score: 101 },
    { key: 'Challenge: produce less waste than Jimmy on Thursday!', score: 55 },
    { key: 'Joel', score: 11 },
    { key: 'John', score: 10 },
]

const Friends = () => {
    return (
        <View style={styles.container}>
            <View style={{backgroundColor: 'lightgrey', marginTop: 50, opacity: 0.5}}>
                <Text style={{color: 'black', opacity: 1, textAlign: 'center', fontSize: 18}}>
                    Your challenges this week:
                </Text>
            </View>
            <FlatList
                data={challenges}
                contentContainerStyle={styles.listView}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.itemContainer}>
                            <View style={{flex: 1}}>
                                <Text style={styles.keyText}>{item.key}</Text>
                            </View>
                            <Text style={styles.scoreText}>{item.score} kg</Text>
                        </View>
                    );
                }}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column'
    },
    itemContainer: {
        flex: 1,
        margin: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
    },
    keyText: {
        fontSize: 18,
        height: 25,
        flexWrap: 'wrap',
    },
    scoreText: {
        fontSize: 18,
        height: 25,
        marginBottom: 0,
        color: '#a9a9a9',
    },
    listView: {
        paddingTop: 10,
        paddingBottom: 20,
    }
  });
  
export default Friends;