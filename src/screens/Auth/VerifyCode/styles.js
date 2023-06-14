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
    phoneNumber:{
        fontWeight:'bold'

    },
    GETOTP:{
        marginTop:ScaleHeight(70),
    },
    otpInput: {
        flex: .3,
        width: '77%',
    },
    codeInputField: {
        color: 'black',
        fontSize: ScaleWidth(30),
        borderWidth: 0,
        paddingTop: 0,
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginHorizontal:ScaleWidth(4)
    },
    codeInputHighlight: {
        borderWidth: 0,
        borderBottomWidth: 2,
        borderColor: COLORS.primary,
    },
    pressHereTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:ScaleHeight(20)
    },
    noArrive: {
        textAlign: 'center',
        color:COLORS.gray
    },
    pressContainerText: {
        alignItems: 'center'
    },
    pressHereText: {
        color: COLORS.primary,
        textAlign: 'center',
        marginLeft:ScaleWidth(5),
        fontWeight:'bold'
    },
   
   
})


export default styles
