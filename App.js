import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged } from "firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Navigation from "./Components/Partials/Navigation/Navigation";
import CompetitionScreen from "./Screens/CompetitionScreen/CompetitionScreen";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import Login from "./Screens/Login/Login";
import NewCompScreen from "./Screens/NewCompScreen/NewCompScreenScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import Register from "./Screens/Register/Register";
import ResultsScreen from "./Screens/ResultsScreen/ResultsScreen";
import SubmitCompScreen from "./Screens/SubmitCompScreen/SubmitCompScreen";
import TestScreen from "./Screens/TestScreen/TestScreen";
import VotingScreen from "./Screens/VotingScreen/VotingScreen";
import { auth } from "./Utils/Firebase";
import { Global } from "./Utils/GlobalStyles";
import { Colors } from "./Utils/ReUsables";
import HomeTab from "./navigation/HomeTab";

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator();
  const [LoggedIn, setLoggedIn] = useState(false);

  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.Dirty_White,
    },
  };

  const [fontsLoaded] = useFonts({
    ubuntu_bold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    ubuntu_regular: require("./assets/fonts/Ubuntu-Regular.ttf"),
    ubuntu_bold_italic: require("./assets/fonts/Ubuntu-BoldItalic.ttf"),
    ubuntu_italic: require("./assets/fonts/Ubuntu-Italic.ttf"),
    karla_bold: require("./assets/fonts/Karla-Bold.ttf"),
    karla: require("./assets/fonts/Karla-VariableFont_wght.ttf"),
    karla_italic: require("./assets/fonts/Karla-Italic-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Check Log In");
      if (user) {
        setLoggedIn(true);
        console.log("Cool Beans");
      } else {
        setLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // const [showDatePicker, setShowDatePicker] = useState(false);

  // const openDatePicker = () => {
  //   setShowDatePicker(true);
  // };

  // const onCancel = () => {
  //   // You should close the modal in here
  //   setShowDatePicker(false);
  // };

  // const onConfirm = (date) => {
  //   // You should close the modal in here
  //   setShowDatePicker(false);

  //   // The parameter 'date' is a Date object so that you can use any Date prototype method.
  //   console.log(date.getDate());
  // };

  return (
    <NavigationContainer theme={Theme} styles={styles.container}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
          backgroundColor: "green",
        }}
      >
        {!LoggedIn ? (
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
        ) : (
          <Stack.Screen name="HomeTab" component={HomeTab}></Stack.Screen>
        )}

        <Stack.Screen
          name="Competitions"
          component={CompetitionScreen}
          options={({ route }) => ({
            headerShown: false,
            title: route.params.CompData.competitionName,
          })}
        ></Stack.Screen>
        <Stack.Screen name="Results" component={ResultsScreen}></Stack.Screen>
        <Stack.Screen
          name="SubmitComp"
          component={SubmitCompScreen}
          options={({ route }) => ({
            headerShown: false,
            title: route.params.project.competitionName,
          })}
        ></Stack.Screen>
        <Stack.Screen name="NewComp" component={NewCompScreen}></Stack.Screen>
        <Stack.Screen name="Voting" component={VotingScreen}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: Colors.Dirty_White,
  },
});
