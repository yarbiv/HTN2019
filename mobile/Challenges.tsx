import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const challenges: any[] = [
    { key: 'Reduce Friday\'s waste by 500 grams', progress: "Oops! You were 0.6 kg off 😔" },
    { key: 'Keep up your streak of less than 60kg per week!', progress: "5 weeks! 🔥🔥" },
    { key: 'Produce less waste than Michael J. on Thursday!', progress: "Success! 7.8 kg vs 8.2kg" },
    { key: 'Challenge a friend?', progress: "" }
]

const Challenges = () => {
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
                            <Text style={styles.progressText}>{item.progress}</Text>
                            <View style={{alignSelf: 'flex-end'}} >
                                {item.progress === "" ? <Ionicons name="md-add-circle" size={50} /> : <View />}
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
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        height: 100
    },
    keyText: {
        fontSize: 18,
        height: 25,
        flexWrap: 'wrap',
    },
    progressText: {
        fontSize: 26,
        color: '#a9a9a9',
    },
    listView: {
        paddingTop: 0,
        paddingBottom: 0,
    }
  });
  
export default Challenges;