import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../../Components/Partials/Button/Button";
import Input from "../../Components/Partials/Input/Input";
import { LogInFun } from "../../Services/firebaseAuth";
import { Global } from "../../Utils/GlobalStyles";
import { Colors } from "../../Utils/ReUsables";
import { LoginStyles } from "./LoginStyles";

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const LogIn = () => {
    console.log("Logging in");
    if (email === "") {
      setemailError("Please enter your email");
    }
    if (password === "") {
      setpasswordError("Please enter a password");
    }

    if (email !== "" && password !== "") {
      LogInFun(email, password);
    }
  };

  return (
    <View style={LoginStyles.Container}>
      <ImageBackground
        style={LoginStyles.Image}
        source={require("../../assets/Backgrounds/Carrot_BackGround.png")}
      >
        <Image
          style={LoginStyles.Logo}
          source={require("../../assets/Logo.png")}
        />
      </ImageBackground>

      <View style={LoginStyles.BottomContainer}>
        <View
          style={{
            marginBottom: 35,
            alignSelf: "flex-start",
          }}
        >
          <Text style={[Global.HeadingOne, LoginStyles.Headings]}>
            Welcome back
          </Text>
          <Text style={[Global.HeadingThree, LoginStyles.Headings]}>
            Login to continue
          </Text>
        </View>

        <View style={LoginStyles.InputContainer}>
          <Input
            Place={"Email"}
            Type={"email-address"}
            Icon={emailError === "" ? "User" : "UserRed"}
            Error={emailError}
            setProp={setEmail}
            SecureEntry={false}
          />
          <Input
            Place={"Password"}
            Type={"default"}
            Icon={passwordError === "" ? "Lock" : "LockRed"}
            Error={passwordError}
            setProp={setPassword}
            SecureEntry={true}
          />
        </View>

        <Button OnPress={LogIn} ButtonType={"Primary"} ButText={"Login"} />

        <View
          style={{
            flexDirection: "row",
            padding: 10,
            marginTop: 35,
            justifyContent: "space-around",
          }}
        >
          <Text style={Global.CompetitionFont}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={[LoginStyles.AccountBold, { color: Colors.Red }]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
