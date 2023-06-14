import React, { useState,useEffect } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from "react-native";
import styles from "./styles";
import { Images } from "../../../constants";
import { AppButton } from "../../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { verify_otp } from "../../../redux/actions/OtpVerificationActions";
import { useDispatch, useSelector } from "react-redux";

const VerifyCode = ({ route }) => {
  const dispatch = useDispatch();
  const { loading, verifyOtpCodeData } = useSelector(
    (state) => state.loginOTPVerificationReducer
  );
  const [buttonPress, setButtonPress] = useState(false)
  const [otpCode, setOtpCode] = useState("");
  const phoneNumber=route.params?.phone
  const handleInputChange = (text) => {
    setOtpCode(text);
  };
  useEffect(() => {
    if (otpCode?.length==4) {
      verify_otp_code_action()
    }
  }, [otpCode]);

  useEffect(() => {
    if (verifyOtpCodeData != undefined&&buttonPress) {
      if (verifyOtpCodeData?.length > 0) {
        Alert.alert("Success!");
      } else {
        Alert.alert("", "OTP is not correct, please try again");
      }
    }
  }, [verifyOtpCodeData]);

  const verify_otp_code_action = () => {
    setButtonPress(true)
    dispatch(verify_otp(otpCode))
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Image source={Images.OTP} style={styles.OTP} />

        <Text style={styles.OTPVerification}>OTP Verification</Text>
        <Text style={styles.OTPVerificationDesc}>
          Enter the OTP sent to <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        </Text>

        <OTPInputView
          pinCount={4}
          keyboardType="phone-pad"
          style={styles.otpInput}
          codeInputFieldStyle={styles.codeInputField}
          codeInputHighlightStyle={styles.codeInputHighlight}
          code={otpCode}
          autoFocusOnLoad
          onCodeChanged={(code) => handleInputChange(code)}
        />
        <View style={styles.pressHereTextContainer}>
          <Text style={styles.noArrive}>Didn’t you receive the OTP?</Text>
          <TouchableOpacity
            style={styles.pressContainerText}
          >
            <Text style={[styles.pressHereText]}>Resend OTP</Text>
          </TouchableOpacity>
        </View>

        <AppButton
          title="Verify"
          backgroundColor={Images.Get_OTP_Button}
          appStyle={styles.GETOTP}
          disabled={otpCode?.length!=4}
          loading={loading}
          onPress={verify_otp_code_action}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default VerifyCode;
