import { useNavigationBuilder } from "@react-navigation/native";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { Alert } from "react-native";
import { auth } from "../Utils/Firebase";

export const RegisterNewUser = (username, email, password) => {
  const navigation = useNavigationBuilder();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage);
      Alert.alert("Error ", errorMessage, [
        { text: "Okay", onPress: () => {} },
      ]);
    });
};

export const LogInFun = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      Alert.alert("Logged In", "You can continue to the app", [
        {
          text: "Continue",
          onPress: () => {},
        },
      ]);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage);
      Alert.alert("Email or Password is incorrect", errorMessage, [
        { text: "Back", onPress: () => {} },
      ]);
    });
};

export const LogOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Cheers!");
    })
    .catch((err) => {
      console.log(err.errorMessage);
    });
};

export const GetCurrentUser = () => {
  return auth.currentUser;
};

const updateAuthProfile = (username) => {};
