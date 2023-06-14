import React, { useReducer, useEffect } from "react";
import {
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { Images } from "../../../constants";
import { AppButton, AppInput } from "../../../components";
import { validatePhone } from "../../../utils/Validation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const reducer = (state, { key, value }) => {
  return { ...state, [key]: value };
};

const OtpVerification = ({ navigation }) => {
  const initailFormState = {
    phone: "",
    buttonDisabled: true,
  };
  const [form, updateForm] = useReducer(reducer, initailFormState);

  useEffect(() => {
    updateForm({
      key: "buttonDisabled",
      value: !validatePhone(form?.phone)
    });
  }, [form?.phone]);

  const onChangeTextPhone = (value) => {
    updateForm({ key: "phone", value });
  };

  const getOtpAction=()=>{
    navigation.navigate("VerifyCode",{phone:form?.phone})
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Image source={Images.OTP} style={styles.OTP} />

        <Text style={styles.OTPVerification}>OTP Verification</Text>
        <Text style={styles.OTPVerificationDesc}>
          We will send you a one time password to your registered mobile number
        </Text>

        <AppInput
          style={styles.phone}
          label="Enter Mobile Number"
          keyboardType="numeric"
          error={form?.phone && !validatePhone(form?.phone)}
          sucsess={validatePhone(form?.phone)}
          onChangeText={onChangeTextPhone}
        />

        <AppButton
          title="GET OTP"
          backgroundColor={Images.Get_OTP_Button}
          appStyle={styles.GETOTP}
          disabled={form?.buttonDisabled}
          onPress={getOtpAction}

        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default OtpVerification;
