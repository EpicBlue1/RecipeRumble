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
import { createUserDB } from "./UserService";

export const RegisterNewUser = async (username, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);
        await createUserDB(username, email, user.uid);
        Alert.alert("Registered ", "Return to log in", [
          { text: "Okay", onPress: () => {} },
        ]);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ": " + errorMessage);
        Alert.alert("Error ", errorMessage, [
          { text: "Okay", onPress: () => {} },
        ]);
      });

    await updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: "https://i.ytimg.com/vi/g744_sUBsgo/maxresdefault.jpg",
    })
      .then((feedback) => {
        console.log(feedback);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export const LogInFun = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
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
