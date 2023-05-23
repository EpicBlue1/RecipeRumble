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
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage);
      Alert.alert("Aint Happening ", errorMessage, [
        { text: "Nope", onPress: () => {} },
      ]);
    });
};

export const LogIn = async (email, password) => {};

export const LogOut = () => {};

export const GetCurrentUser = () => {};

const updateAuthProfile = (username) => {};
