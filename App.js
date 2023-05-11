import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
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
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import Register from "./Screens/Register/Register";
import ResultsScreen from "./Screens/ResultsScreen/ResultsScreen";
import TestScreen from "./Screens/TestScreen/TestScreen";
import VotingScreen from "./Screens/VotingScreen/VotingScreen";
import { Global } from "./Utils/GlobalStyles";
import { Colors } from "./Utils/ReUsables";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    ubuntu_bold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    ubuntu_regular: require("./assets/fonts/Ubuntu-Regular.ttf"),
    ubuntu_bold_italic: require("./assets/fonts/Ubuntu-BoldItalic.ttf"),
    ubuntu_italic: require("./assets/fonts/Ubuntu-Italic.ttf"),
    karla_bold: require("./assets/fonts/Karla-Bold.ttf"),
    karla: require("./assets/fonts/Karla-VariableFont_wght.ttf"),
    karla_italic: require("./assets/fonts/Karla-Italic-VariableFont_wght.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={[styles.container, Global.droidSafeArea]}
      onLayout={onLayoutRootView}
    >
      <ImageBackground
        source={require("./assets/Backgrounds/AppBackground.png")}
      >
        {/* <StatusBar hidden /> */}
        {/* <TestScreen /> */}
        {/* <HomeScreen /> */}
        <VotingScreen />
        {/* <CompetitionScreen /> */}
        {/* <ResultsScreen /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        <ProfileScreen />
      </ImageBackground>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: Colors.Dirty_White,
  },
});
