import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import NavIcon from "../Components/Partials/navIcon/navIcon";
import CompetitionScreen from "../Screens/CompetitionScreen/CompetitionScreen";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

//TODO add indicators
const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 70 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 32, height: 32 }}
                source={require("../assets/icons/Home.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 32, height: 32 }}
                source={require("../assets/icons/Setting.png")}
              />
            );
          },
        }}
      />
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
