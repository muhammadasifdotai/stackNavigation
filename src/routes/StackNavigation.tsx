import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ContactScreen from "../screens/ContactScreen/ContactScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="ContactScreen" component={ContactScreen}/>
        <Stack.Screen name="AboutScreen" component={AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}