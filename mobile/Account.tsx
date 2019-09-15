import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const options = [
    { key: "Profile", icon: "md-person" },
    { key: "Connect", icon: "md-share" },
    { key: "Add/View Devices", icon: "md-wifi" },
    { key: "About Us", icon: "md-information-circle-outline" },
    { key: "Options", icon: "md-options" },
];

const Account = () => {
    return (
        <View style={styles.container}>
            <View style={{borderBottomColor: "black", borderBottomWidth: 0.5, marginTop: 100}}>
                <View style={{height: 125, flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Image source={require('./img/avatar.png')} resizeMode='contain'
                           style={{flex: 1, resizeMode: 'contain', width: undefined, height: undefined}} />
                    <View style={{flexDirection: 'column', alignSelf: "center"}}>
                        <Text style={{fontSize: 36, justifyContent: 'flex-end', margin: 10}}>You</Text>
                        <Text style={{fontSize: 26, color: 'grey', margin: 10}} >user.name@mail.com</Text>
                    </View>
                </View>
                <FlatList
                    data={options}
                    contentContainerStyle={styles.listView}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.itemContainer}>
                                <Ionicons name={item.icon} size={40} style={{marginRight: 30, marginLeft: 30}} />
                                <Text style={styles.keyText}>
                                    {item.key}
                                </Text>
                            </View>
                        );
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    itemContainer: {
        flex: 1,
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        height: 90,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    keyText: {
        fontSize: 20,
        flexWrap: 'wrap',
    },
    listView: {
        paddingTop: 10,
        paddingBottom: 20,
    },
});

export default Account;