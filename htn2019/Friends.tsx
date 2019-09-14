import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const friendsList: any[] = [
    { key: 'Devin', score: 102 },
    { key: 'Jackson', score: 101 },
    { key: 'James', score: 55 },
    { key: 'Joel', score: 11 },
    { key: 'John', score: 10 },
    { key: 'Jillian', score: 1 },
    { key: 'Jimmy', score: 19 },
    { key: 'Julie', score: 1000 },
    { key: 'Jafar', score: 430 },
    { key: 'Starlord', score: 9407 },
    { key: 'Shaq', score: 9012 },
    { key: 'Bloop Bleep', score: 34 },
    { key: 'ItsLate', score: 55 },
    { key: 'Michael', score: 23 },
    { key: 'Jordan', score: 60 },
    { key: 'Romeo', score: 244 },
]

const Friends = () => {
    return (
        <View style={styles.container}>
            <View style={{backgroundColor: 'lightgrey', marginTop: 50, opacity: 0.5}}>
                <Text style={{color: 'black', opacity: 1, textAlign: 'center', fontSize: 18}}>
                    Leaderboard this week:
                </Text>
            </View>
            <FlatList
                data={friendsList.sort((a, b) => a.score - b.score)}
                contentContainerStyle={styles.listView}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.itemContainer}>
                            <Text style={styles.numText}>{index+1}</Text>
                            <View style={{margin: 'auto'}}>
                                <Text style={styles.keyText}>{item.key}</Text>
                                <Text style={styles.scoreText}>{item.score} kg</Text>
                            </View>
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
        justifyContent: 'flex-start',
        flexDirection: 'row',
        margin: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
    },
    keyText: {
        padding: 0,
        fontSize: 18,
        height: 25,
        marginBottom: 0,
    },
    numText: {
        fontSize: 18,
        marginBottom: 0,
        marginRight: 10,
        marginLeft: 5,
        alignSelf: 'center',
        color: '#a9a9a9',
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