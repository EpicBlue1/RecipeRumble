import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CompetitionBox from '../../Components/Common/CompetitionBox/CompetitionBox'
import { Global } from '../../Utils/GlobalStyles'
import { HomeStyles } from './HomeScreenStyles'

const HomeScreen = () => {
  return (
    <View style={HomeStyles.Container}>
        <Text style={Global.HeadingOne}>Home</Text>
        <CompetitionBox></CompetitionBox>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})