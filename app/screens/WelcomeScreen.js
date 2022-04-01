import React from 'react';
import {StyleSheet, View, StatusBar, Text, Pressable} from 'react-native'

function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.mapButton} onPress={() => navigation.navigate('Map')}>
                <Text style={{fontSize: 50}}>MAP</Text>
            </Pressable>
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
      mapButton: {
        width: '80%',
        height: '10%',
        backgroundColor: '#fc5c65',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default WelcomeScreen;