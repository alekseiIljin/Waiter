import React from 'react';
import {View, Image, StyleSheet, StatusBar, Text, Pressable} from 'react-native';

function ViewMapScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.table} onPress={() => navigation.navigate('Table', { number: '1'})}>
                <Text style={{color: 'white', fontSize: 20}}>Table 1</Text></Pressable>
            <Pressable style={styles.table} onPress={() => navigation.navigate('Table', { number: '2'})}>
                <Text style={{color: 'white', fontSize: 20}}>Table 2</Text></Pressable>
            <Pressable style={styles.table} onPress={() => navigation.navigate('Table', { number: '3'})}>
                <Text style={{color: 'white', fontSize: 20}}>Table 3</Text></Pressable>
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
      table: {
        margin: 5,
        width: 150,
        height: 150,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default ViewMapScreen;