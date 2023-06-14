import React from 'react'
import { StyleSheet } from 'react-native'
import { COLORS, height, ScaleHeight, ScaleWidth, width } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    onboarding_background:{
        width:width,
        height:height/1.5,
        resizeMode:'cover'
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
    signin:{
        marginTop:ScaleHeight(70)
    },
    Signup:{
        marginTop:ScaleHeight(20)
    }
   
})


export default styles
