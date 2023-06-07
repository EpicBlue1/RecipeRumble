import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DatePicker from "react-native-neat-date-picker";
import BackButton from "../../Components/Partials/BackButton/BackButton";
import Button from "../../Components/Partials/Button/Button";
import Input from "../../Components/Partials/Input/Input";
import {
  createCompetition,
  createSubmission,
} from "../../Services/CompetitionService";
import { GetCurrentUser } from "../../Services/firebaseAuth";
import { Global } from "../../Utils/GlobalStyles";
import { Colors } from "../../Utils/ReUsables";
import { NewCompScreenStyle } from "./NewCompScreenScreenStyle";

//TODO are you sure you want to go back when competition info is filled in
//TODO modal to show competition requirements
//TODO check if inputs are empty

const NewCompScreen = ({ navigation }) => {
  const [Image, setImage] = useState("");
  const [SubName, setSubName] = useState("");
  const [Description, setDescription] = useState("");
  const [Ingredient, setIngredient] = useState("");
  const [Step, setStep] = useState("");

  const [showDatePickerSingle, setShowDatePickerSingle] = useState(false);
  const [showDatePickerRange, setShowDatePickerRange] = useState(false);

  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [DescError, setDescError] = useState("");
  const [IngredientError, setIngredientError] = useState("");

  const [Ingredients, setIngredients] = useState([]);
  const [Steps, setSteps] = useState([]);

  const addRecipe = () => {
    //TODO check if item is already added
    //TODO max items?
    setIngredients((items) => [...items, Ingredient]);
    this.textInput.clear();
  };

  const addStep = () => {
    setSteps((items) => [...items, Step]);
    this.textInput.clear();
  };

  const addSubmission = async () => {
    let Submission = {
      Image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      Date: date,
      StartDate: startDate,
      EndDate: endDate,
      EventName: SubName,
      Description: Description,
      Requirements: Ingredients,
      Rules: Steps,
      Userid: GetCurrentUser().uid,
    };

    const success = createCompetition(Submission);
    if (success) {
      console.log("Added Submission");
    } else {
      console.log("Not added Submission");
    }
  };

  const openDatePickerSingle = () => setShowDatePickerSingle(true);
  const openDatePickerRange = () => setShowDatePickerRange(true);

  const onCancelSingle = () => {
    // You should close the modal in here
    setShowDatePickerSingle(false);
  };

  const onConfirmSingle = (output) => {
    // You should close the modal in here
    setShowDatePickerSingle(false);

    // The parameter 'output' is an object containing date and dateString (for single mode).
    // For range mode, the output contains startDate, startDateString, endDate, and EndDateString
    console.log(output);
    setDate(output.dateString);
  };

  const onCancelRange = () => {
    setShowDatePickerRange(false);
  };

  const onConfirmRange = (output) => {
    setShowDatePickerRange(false);
    setStartDate(output.startDateString);
    setEndDate(output.endDateString);
  };

  return (
    <View style={NewCompScreenStyle.Container}>
      <DatePicker
        isVisible={showDatePickerRange}
        mode={"range"}
        onCancel={onCancelRange}
        onConfirm={onConfirmRange}
      />

      <ScrollView>
        <ImageBackground
          style={NewCompScreenStyle.Image}
          source={require("../../assets/Backgrounds/NewCompBack.jpg")}
        >
          <BackButton />
          <View style={NewCompScreenStyle.InfoContainer}>
            <Text style={Global.HeadingTwo}>New Event</Text>
          </View>
        </ImageBackground>
        <View style={NewCompScreenStyle.InputContainer}>
          <ImageBackground
            style={NewCompScreenStyle.addImage}
            source={require("../../assets/Backgrounds/Blank.jpg")}
          >
            <ImageBackground
              style={NewCompScreenStyle.addImageInner}
              source={require("../../assets/icons/Gallery.png")}
            ></ImageBackground>
          </ImageBackground>
          <Input
            Place={"Competition/Event Name"}
            Type={"default"}
            Icon={"Edit"}
            SecureEntry={false}
            setProp={setSubName}
            Error={""}
          />
          <View
            style={{
              marginTop: 10,
              marginBottom: 30,
              width: "90%",
              borderBottomColor: Colors.Gray,
              borderBottomWidth: 0.5,
            }}
          />
          <Text style={Global.HeadingThree}>Required Ingredients:</Text>
          <View style={NewCompScreenStyle.IngredientsContainer}>
            {Ingredients.length === 0 ? (
              <Text>Add required ingredients below!</Text>
            ) : (
              Ingredients.map((Item, index) => (
                <View key={index} style={NewCompScreenStyle.IngredientView}>
                  <Text>{Item}</Text>
                </View>
              ))
            )}
          </View>
          <Input
            Place={"Ingredient name"}
            Type={"default"}
            Icon={"Edit"}
            SecureEntry={false}
            setProp={setIngredient}
            Error={""}
            Ref={(input) => {
              this.textInput = input;
            }}
          />
          <Button
            OnPress={addRecipe}
            ButtonType={"Secondary"}
            ButText={"Add Requirement"}
          />
          <View
            style={{
              marginTop: 30,
              marginBottom: 30,
              width: "90%",
              borderBottomColor: Colors.Gray,
              borderBottomWidth: 0.5,
            }}
          />
          <Text style={Global.HeadingThree}>Rules(Optional):</Text>
          <View style={NewCompScreenStyle.StepsContainer}>
            {Ingredients.length === 0 ? (
              <Text>Add rules below!</Text>
            ) : (
              Steps.map((Item, index) => (
                <View key={index} style={NewCompScreenStyle.StepsView}>
                  <Text>
                    {index + 1}. {Item}
                  </Text>
                </View>
              ))
            )}
          </View>
          <Input
            Place={"Rule desc"}
            Type={"default"}
            Icon={"Edit"}
            SecureEntry={false}
            setProp={setStep}
            Error={""}
            Ref={(input) => {
              this.textInput = input;
            }}
          />
          <Button
            OnPress={addStep}
            ButtonType={"Secondary"}
            ButText={"Add Step"}
          />
          <View
            style={{
              marginTop: 30,
              marginBottom: 30,
              width: "90%",
              borderBottomColor: Colors.Gray,
              borderBottomWidth: 0.5,
            }}
          />
          <Input
            Place={"Submission Description"}
            Type={"default"}
            Icon={"Edit"}
            SecureEntry={false}
            setProp={setDescription}
            Error={""}
          />

          {/* //TODO make sure date is not in past*/}

          <Text style={Global.HeadingThree}>
            {startDate && `${startDate} ~ ${endDate}`}
          </Text>

          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}
          />

          <Button
            OnPress={openDatePickerRange}
            ButtonType={"Secondary"}
            ButText={"Close Date Range"}
          />

          <View
            style={{
              marginTop: 10,
              marginBottom: 5,
            }}
          />

          <Text style={Global.Paragraph}>
            Note: Competitions that run only for one day will be considered as
            events
          </Text>

          <View
            style={{
              marginTop: 30,
              marginBottom: 30,
              width: "90%",
              borderBottomColor: Colors.Gray,
              borderBottomWidth: 0.5,
            }}
          />

          <Button
            OnPress={addSubmission}
            ButtonType={"Primary"}
            ButText={"Submit"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default NewCompScreen;
