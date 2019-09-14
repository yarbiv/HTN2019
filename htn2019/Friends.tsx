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
            <FlatList
                data={friendsList.sort((a, b) => b.score - a.score)}
                contentContainerStyle={styles.listView}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.itemContainer}>
                            <Text style={styles.numText}>{index+1}</Text>
                            <View>
                                <Text style={styles.keyText}>{item.key}</Text>
                                <Text style={styles.scoreText}>{item.score}</Text>
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
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        margin: 5,
    },
    keyText: {
        padding: 0,
        fontSize: 18,
        height: 25,
        marginBottom: 0
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
        paddingTop: 60,
        paddingBottom: 20,
    }
  });
  
export default Friends;