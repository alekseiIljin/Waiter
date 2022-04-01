import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewMapScreen from './app/screens/ViewMapScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import TableScreen from './app/screens/TableScreen';
import OrderScreen from './app/screens/OrderScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log(Date.now().toString())
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Map" component={ViewMapScreen}/>
          <Stack.Screen name="Table" component={TableScreen}/>
          <Stack.Screen name="Order" component={OrderScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
