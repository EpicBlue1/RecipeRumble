import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import Button from '../../Components/Partials/Button/Button'
import { Global } from '../../Utils/GlobalStyles'
import { LoginStyles } from './LoginStyles'

const Login = () => {
  return (
    <View style={LoginStyles.Container}>
        <ImageBackground style={LoginStyles.Image} source={require("../../assets/Backgrounds/Carrot_BackGround.png")}>
            <Image style={LoginStyles.Logo} source={require("../../assets/Logo.png")}/>
        </ImageBackground>

        <View style={LoginStyles.BottomContainer}>
            <View>
                <Text style={Global.HeadingOne}>Welcome back</Text>
                <Text style={Global.HeadingThree}>Login to continue</Text>
            </View>

            <View>
                <TextInput style={Global.InputStyle} editable placeholder='Email' keyboardType='email-address' />
                <TextInput style={Global.InputStyle} keyboardType='default' secureTextEntry={true} placeholder='Password' />
            </View>

            <Button ButtonType={'Primary'} ButText={"Login"}/>
        </View>


    </View>
  )
}

export default Login

