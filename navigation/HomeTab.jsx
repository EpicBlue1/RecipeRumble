import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Alert, Button, Pressable, StyleSheet, Text, View } from "react-native";
import CompetitionScreen from "../Screens/CompetitionScreen/CompetitionScreen";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      styles={styles.Container}
      screenOptions={(({ Routing }) => {}, { headerShown: false })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  Container: {
    padding: 0,
    backgroundColor: "red",
    // paddingBottom: 10,
    // paddingRight: 15,
  },
});
