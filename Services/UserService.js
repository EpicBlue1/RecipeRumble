import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../Utils/Firebase";

//user collection
//TODO: check if user already has been added
export const createUserDB = async (username, email, uid) => {
  try {
    const docRef = await setDoc(doc(db, "users", uid), {
      username,
      email,
      createdAt: Timestamp.now(),
      PrevSubmissions: [],
    });
  } catch (error) {
    console.log("user not added: " + error);
  }
};
