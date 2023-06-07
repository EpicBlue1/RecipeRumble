import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../Utils/Firebase";

export const CompetitionData = [
  {
    competitionName: "Tasty Treats Recipe",
    competitionImage:
      "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    description:
      "Welcome to the Tasty Treats Recipe Competition! Show off your culinary prowess by submitting your most mouthwatering recipes. Whether it's a savory dish or a delectable dessert, we want to see what you've got!",
    startTime: "2023-07-14 18:00:00",
    type: "event",
    competitionDone: false,
    participants: [],
    submissions: [
      {
        subName: "Heavenly Chocolate Cake",
        userId: "user123",
        image: "/path/to/image/chocolate_cake.jpg",
        votes: 10,
        description:
          "Indulge in this divine chocolate cake with a rich, moist texture and irresistible taste.",
      },
      {
        subName: "Savory Chicken Parmesan",
        userId: "user456",
        image: "/path/to/image/chicken_parmesan.jpg",
        votes: 5,
        description:
          "Delight in the perfect blend of tender chicken, tangy tomato sauce, and melted cheese in this classic Italian dish.",
      },
      {
        subName: "Creamy Strawberry Cheesecake",
        userId: "user789",
        image: "/path/to/image/strawberry_cheesecake.jpg",
        votes: 8,
        description:
          "Experience the luscious combination of smooth cream cheese, sweet strawberries, and buttery crust in this delightful cheesecake.",
      },
    ],
  },
  {
    competitionName: "Spicy Delights Cook-Off",
    competitionImage:
      "https://images.unsplash.com/photo-1567539549213-cc1697632146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    description:
      "Get ready for the Spicy Delights Cook-Off! Showcase your culinary skills by preparing the most tantalizing and fiery dishes. We're looking for the best spicy recipes out there!",
    startTime: "2023-08-28 14:00:00",
    type: "competition",
    competitionDone: false,
    participants: [],
    submissions: [
      {
        subName: "Fiery Jalapeno Poppers",
        userId: "user123",
        image: "/path/to/image/jalapeno_poppers.jpg",
        votes: 7,
        description:
          "Experience the perfect balance of heat and flavor with these spicy jalapeno poppers filled with cream cheese and wrapped in bacon.",
      },
      {
        subName: "Hot and Spicy Chicken Wings",
        userId: "user456",
        image: "/path/to/image/chicken_wings.jpg",
        votes: 12,
        description:
          "Ignite your taste buds with these sizzling chicken wings coated in a fiery hot sauce. Perfect for spice enthusiasts!",
      },
      {
        subName: "Sizzlin' Cajun Shrimp",
        userId: "user789",
        image: "/path/to/image/cajun_shrimp.jpg",
        votes: 5,
        description:
          "Transport yourself to the flavors of Louisiana with these Cajun-spiced shrimp served with a zesty dipping sauce.",
      },
    ],
  },
  {
    competitionName: "Healthy Eats Challenge",
    competitionImage:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",

    description:
      "Welcome to the Healthy Eats Challenge! Show us your best nutritious and delicious recipes that promote a healthy lifestyle. Let's make eating well exciting and flavorful!",
    startTime: "2023-09-05 10:00:00",
    type: "event",
    competitionDone: false,
    participants: [],
    submissions: [
      {
        subName: "Quinoa Power Salad",
        userId: "user123",
        image: "/path/to/image/quinoa_salad.jpg",
        votes: 9,
        description:
          "Fuel your body with this nutrient-packed quinoa salad loaded with colorful veggies, protein, and a tangy vinaigrette.",
      },
      {
        subName: "Vegan Lentil Curry",
        userId: "user456",
        image: "/path/to/image/lentil_curry.jpg",
        votes: 6,
        description:
          "Delight in the aromatic spices and wholesome goodness of this vegan lentil curry that's both nutritious and satisfying.",
      },
      {
        subName: "Fresh Berry Smoothie Bowl",
        userId: "user789",
        image: "/path/to/image/smoothie_bowl.jpg",
        votes: 11,
        description:
          "Start your day with a burst of flavors and vitamins with this refreshing smoothie bowl topped with fresh berries and crunchy granola.",
      },
    ],
  },
];

export const createCompetition = async (competition) => {
  try {
    const docRef = await addDoc(collection(db, "competitions"), competition);
    console.log("Added Competition " + docRef.id);
    if (docRef.id) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("competition not added: " + error);
  }
};

export const createSubmission = async (submission) => {
  try {
    const docRef = await addDoc(collection(db, "submissions"), submission);
    console.log("Added Submission " + docRef.id);
    if (docRef.id) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("user not added: " + error);
  }
};

export const getAllCompetitions = async () => {
  try {
    var Competitions = [];
    const snapshot = await getDocs(collection(db, "competitions"));

    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());

      Competitions.push({ ...doc.data(), CompId: doc.id });
    });

    return Competitions;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getSubmissionsById = async () => {
  try {
    var Competitions = [];
    const snapshot = await getDocs(collection(db, "competitions"));

    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      Competitions.push(doc.data());
    });

    return Competitions;
  } catch (error) {
    console.log(error);
    return [];
  }
};
