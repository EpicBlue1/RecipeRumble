import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Button from "../../Components/Partials/Button/Button";
import { Global } from "../../Utils/GlobalStyles";
import { LoginStyles } from "./RegisterStyles";

const Register = () => {
  return (
    <View style={LoginStyles.Container}>
      <ScrollView>
        <ImageBackground
          style={LoginStyles.Image}
          source={require("../../assets/Backgrounds/Leaf_Background.png")}
        >
          <Image
            style={LoginStyles.Logo}
            source={require("../../assets/Logo.png")}
          />
        </ImageBackground>

        <View style={LoginStyles.BottomContainer}>
          <View style={{ marginBottom: 35 }}>
            <Text style={Global.HeadingOne}>Join today!</Text>
            <Text style={Global.HeadingThree}>Sign Up to continue</Text>
          </View>

          <View style={LoginStyles.InputContainer}>
            <TextInput
              style={Global.InputStyle}
              editable
              placeholder="Username"
              keyboardType="email-address"
            />
            <TextInput
              style={Global.InputStyle}
              keyboardType="default"
              secureTextEntry={true}
              placeholder="Email"
            />
            <TextInput
              style={Global.InputStyle}
              editable
              placeholder="Password"
              keyboardType="email-address"
            />
            <TextInput
              style={Global.InputStyle}
              keyboardType="default"
              secureTextEntry={true}
              placeholder="Confirm Password"
            />
          </View>

          <Button ButtonType={"Primary"} ButText={"Login"} />

          <View style={{ flexDirection: "row", marginTop: 35 }}>
            <Text style={LoginStyles.Account}>Already have an account?</Text>
            <Text style={LoginStyles.AccountBold}>Login</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
