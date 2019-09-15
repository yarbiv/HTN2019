import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const friendsList: any[] = [
    { key: 'Devin B.', score: 10.1 },
    { key: 'Jeffery E.', score: 15 },
    { key: 'LBJ', score: 3.01 },
    { key: 'Michael J.', score: 3 },
    { key: 'John S.', score: 2.6 },
    { key: 'Marie C.', score: 2.4 },
    { key: 'William S.', score: 30 },
    { key: 'Steve N.', score: 8.9 },
    { key: 'Pamela A.', score: 6.7 },
    { key: 'Ronald M.', score: 8.11 },
    { key: 'Geraldo', score: 5.16 },
    { key: 'Charles K.', score: 12 },
    { key: 'Nancy P.', score: 10.1 },
    { key: 'Anna K.', score: 5 },
    { key: 'Lonzo B.', score: 2.1 },
    { key: 'Gordon', score: 14 },
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
                        <Ionicons name="md-open" style={{marginLeft: 'auto', marginRight: 10}} size={32} />
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