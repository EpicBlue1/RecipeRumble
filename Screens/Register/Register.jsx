import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
import { RegisterNewUser } from "../../Services/firebaseAuth";
import { Global } from "../../Utils/GlobalStyles";
import { Colors } from "../../Utils/ReUsables";
import { LoginStyles } from "./RegisterStyles";

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCon, setpasswordCon] = useState("");
  const [userName, setUserName] = useState("");

  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [passwordErrorCon, setpasswordErrorCon] = useState("");
  const [userNameError, setuserNameError] = useState("");

  useEffect(() => {
    console.log(userName);
  }, [userName]);

  const Register = () => {
    console.log("Registering");
    if (email === "") {
      setemailError("Please enter your email");
    }
    if (password === "") {
      setpasswordError("Please enter a password");
    }
    if (passwordCon === "") {
      setpasswordErrorCon("Please confirm your password");
    }
    if (userName == "") {
      setuserNameError("Please enter a user name");
    }

    if (
      email !== "" &&
      password !== "" &&
      passwordCon !== "" &&
      userName !== ""
    ) {
      RegisterNewUser(userName, email, password);
    }
  };

  return (
    <View style={LoginStyles.Container}>
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
        <View
          style={{
            marginBottom: 35,
            alignSelf: "flex-start",
          }}
        >
          <Text style={[Global.HeadingOne, LoginStyles.Headings]}>
            Join Today!
          </Text>
          <Text style={[Global.HeadingThree, LoginStyles.Headings]}>
            Sign Up to continue
          </Text>
        </View>

        <View style={LoginStyles.InputContainer}>
          <Input
            Place={"Username"}
            Type={"default"}
            Icon={userNameError === "" ? "User" : "UserRed"}
            SecureEntry={false}
            setProp={setUserName}
            Error={userNameError}
          />
          <Input
            Place={"Email"}
            Type={"email-address"}
            Icon={emailError === "" ? "Mail" : "MailRed"}
            SecureEntry={false}
            setProp={setEmail}
            Error={emailError}
          />
          <Input
            Place={"Password"}
            Type={"default"}
            Icon={passwordError === "" ? "Lock" : "LockRed"}
            SecureEntry={true}
            setProp={setPassword}
            Error={passwordError}
          />
          <Input
            Place={"Confirm Password"}
            Type={"default"}
            Icon={passwordError === "" ? "Lock" : "LockRed"}
            SecureEntry={true}
            setProp={setpasswordCon}
            Error={passwordErrorCon}
          />
        </View>

        <Button
          OnPress={Register}
          ButtonType={"Primary"}
          ButText={"Register"}
        />

        <View
          style={{
            flexDirection: "row",
            padding: 10,
            marginTop: 35,
            justifyContent: "space-around",
          }}
        >
          <Text style={Global.CompetitionFont}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={[LoginStyles.AccountBold, { color: Colors.Red }]}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
