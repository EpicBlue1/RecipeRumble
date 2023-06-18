import {
  Timestamp,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../Utils/Firebase";
//user collection
//TODO: check if user already has been added
export const createUserDB = async (username, email, uid) => {
  console.log(uid);
  try {
    const docRef = await setDoc(doc(db, "users", uid), {
      id: uid,
      username,
      email,
      createdAt: Timestamp.now(),
      PrevSubmissions: [],
      ProfileImage: "gs://reciperumble-f3601.appspot.com/profile.jpg",
    });
  } catch (error) {
    console.log("user not added: " + error);
  }
};

export const getCurrentUserData = async (email) => {
  try {
    const snapshot = await getDocs(collection(db, "users"));
    let user = "";

    snapshot.forEach((user) => {
      // console.log(user.databaseId());
      if (user.data().email === email) {
        console.log("Current User Data:");
        console.log(user.data());
        user = user.data();
      }
    });

    return snapshot;
  } catch (error) {
    console.log(error);
  }
};
