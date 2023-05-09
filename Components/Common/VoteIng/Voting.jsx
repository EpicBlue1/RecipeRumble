import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Global } from '../../../Utils/GlobalStyles'
import { VotingStyles } from './VotingStyles'

const Voting = ({VoteImage, Description}) => {
    //useMemo
    const [Voted, setVoted] = useState(false);
    const [ShowDesc, setShowDesc] = useState(true)

    const Vote = () => {
        setVoted((Value) => !Value)
    }

    const ShowDescription = () => {
        setShowDesc((Value) => !Value)
    }

    useEffect(()=> {
        console.log(Voted);
    }, [Voted])

  return (

    <ImageBackground style={ShowDesc ? VotingStyles.Container : VotingStyles.ContainerTall } source={require("../../../assets/Test.png")}>
        <TouchableOpacity style={ Voted ? [VotingStyles.Overlay, VotingStyles.Voted] : [VotingStyles.Overlay] }>
            <TouchableOpacity onPress={Vote} style={  VotingStyles.HeartContainer  }>
                <Image style={ Voted ? VotingStyles.Heart : [VotingStyles.HeartContainer, VotingStyles.Hide ]} source={require("../../../assets/icons/Heart.png")}/>
                <Text style={ Voted ? [Global.HeadingThree, VotingStyles.VotedText] : [Global.HeadingThree, VotingStyles.VotedText, VotingStyles.Hide ] }>Voted!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ShowDescription} style={VotingStyles.IconsContainer}>
                <ImageBackground style={VotingStyles.IconOne} source={require("../../../assets/Info.png")}></ImageBackground>
                <ImageBackground style={VotingStyles.Icon} source={require("../../../assets/clicking.png")}></ImageBackground>
            </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity onPress={ShowDescription} style={ShowDesc ? VotingStyles.Description : VotingStyles.DescriptionTall}>
            <ScrollView>
                <Text style={Global.HeadingTwo}>Submission Title</Text>
                <Text style={Global.Paragraph}>
                    Get ready to show off your culinary skills in the ultimate pasta cooking competition! This event is open to all pasta lovers who want to showcase their creativity in the kitchen. Whether you prefer.
                </Text>
            </ScrollView>
        </TouchableOpacity>
    </ImageBackground>

  )
}

export default Voting

