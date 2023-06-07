import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BackButton from "../../Components/Partials/BackButton/BackButton";
import { Global } from "../../Utils/GlobalStyles";
import { SubmitScreenStyle } from "./SubmitCompScreenStyle";

//TODO are you sure you want to go back when competition info is filled in
const SubmitCompScreen = () => {
  return (
    <View style={SubmitScreenStyle.Container}>
      <ScrollView>
        <ImageBackground
          style={SubmitScreenStyle.Image}
          source={require("../../assets/Backgrounds/CompSubmitBack.jpg")}
        >
          <BackButton />
          <View style={SubmitScreenStyle.InfoContainer}>
            <Text style={Global.HeadingTwo}>Submit Competition</Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default SubmitCompScreen;
