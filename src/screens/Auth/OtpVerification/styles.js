import React from 'react'
import { StyleSheet } from 'react-native'
import { COLORS, height, ScaleHeight, ScaleWidth, width } from '../../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    OTP:{
        width:ScaleWidth(150),
        height:ScaleWidth(150),
        resizeMode:'contain',
        alignSelf:'center'
    },
    Logo_White:{
        width:ScaleWidth(60),
        height:ScaleWidth(60),
        marginLeft:ScaleWidth(40),
        marginTop:ScaleWidth(70)
    },
    Welcome:{
        marginLeft:ScaleWidth(40),
        marginTop:ScaleWidth(10),
        fontSize:ScaleWidth(22),
        color:COLORS.white
    },
    OTPVerification:{
        marginTop:ScaleHeight(50),
        fontSize:ScaleWidth(22),
        color:COLORS.black,
        fontWeight:'bold',
        alignSelf:'center',

    },OTPVerificationDesc:{
        marginTop:ScaleHeight(20),
        fontSize:ScaleWidth(13),
        color:COLORS.gray,
        alignSelf:'center',
        textAlign:'center',
        width:width-ScaleWidth(50)
    },
    GETOTP:{
        marginTop:ScaleHeight(70),
    },
    phone:{
        width:width/1.7,
        height:ScaleWidth(50),
        backgroundColor:COLORS.white,
        marginTop:ScaleHeight(50)
    },
  
    
   
   
})


export default styles
