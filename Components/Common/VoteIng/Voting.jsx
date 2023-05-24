import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Global } from "../../../Utils/GlobalStyles";
import { VotingStyles } from "./VotingStyles";

const Voting = ({ VoteImage, Description }) => {
  //useMemo
  const [Voted, setVoted] = useState(false);
  const [ShowDesc, setShowDesc] = useState(true);
  const [voteCount, setVoteCount] = useState(0);

  const Vote = () => {
    setVoteCount((value) => (value < 1 ? value + 1 : value));

    if (voteCount === 1) {
      setVoted(true);
    } else if (voteCount < 1) {
      setTimeout(function () {
        setVoteCount(0);
        console.log("Like reset");
      }, 1800);
    }
  };

  useEffect(() => {
    if (voteCount === 2) {
      console.log("Vote count reached 2");
    }
  }, [voteCount]);

  console.log(voteCount);

  return (
    <ImageBackground
      style={ShowDesc ? VotingStyles.Container : VotingStyles.ContainerTall}
      source={require("../../../assets/Test.png")}
    >
      <TouchableOpacity
        style={
          Voted
            ? [VotingStyles.Overlay, VotingStyles.Voted]
            : [VotingStyles.Overlay]
        }
      >
        <TouchableOpacity onPress={Vote} style={VotingStyles.HeartContainer}>
          <Image
            style={
              Voted
                ? VotingStyles.Heart
                : [VotingStyles.HeartContainer, VotingStyles.Hide]
            }
            source={require("../../../assets/icons/Heart.png")}
          />
          <Text
            style={
              Voted
                ? [Global.HeadingThree, VotingStyles.VotedText]
                : [
                    Global.HeadingThree,
                    VotingStyles.VotedText,
                    VotingStyles.Hide,
                  ]
            }
          >
            Voted!
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={VotingStyles.Description}>
        <Text style={Global.HeadingTwo}>Submission Title</Text>
        <View
          style={{
            width: 130,
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "flex-end",
          }}
        >
          <Image
            style={VotingStyles.LeftIcon}
            source={require("../../../assets/icons/Play.png")}
          />
          <Text style={Global.Paragraph}>Read More</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Voting;
