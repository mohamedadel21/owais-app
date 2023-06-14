import React, { useReducer, useEffect } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./styles";
import { Images } from "../../../constants";
import { AppButton, AppInput } from "../../../components";
import { validateEmail } from "../../../utils/Validation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/actions/LoginActions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const reducer = (state, { key, value }) => {
  return { ...state, [key]: value };
};

const Signin = ({ navigation }) => {
  const initailFormState = {
    email: "",
    password: "",
    showPassword: true,
    buttonDisabled: true,
    buttonPress:false
  };
  const [form, updateForm] = useReducer(reducer, initailFormState);
  const dispatch = useDispatch();
  const { loading, loginData } = useSelector(
    (state) => state.userLoginReducer
  );

  useEffect(() => {
    updateForm({
      key: "buttonDisabled",
      value: !validateEmail(form?.email) || form?.password?.length < 7,
    });
  }, [form?.email, form?.password]);

  useEffect(() => {
    if (loginData != undefined&&form?.buttonPress) {
      if (loginData?.length > 0) {
        navigation.navigate("OtpVerification");
      } else {
        Alert.alert("", "Email or password is not correct, please try again");
      }
    }
  }, [loginData]);

  const onChangeTextEmail = (value) => {
    updateForm({ key: "email", value });
  };
  const onChangeTextPassword = (value) => {
    updateForm({ key: "password", value });
  };
  const onShowPassword = () => {
    updateForm({ key: "showPassword", value: !form?.showPassword });
  };
  const loginAction = () => {
    updateForm({ key: "buttonPress", value:true });
    dispatch(login(form?.email, form?.password));
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.auth_background}
        style={styles.Signin_background}
      >
        <Image source={Images.Logo_White} style={styles.Logo_White} />
        <Text style={styles.Welcome}>{`Welcome \n Back`}</Text>
      </ImageBackground>
      <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.signupText}>Sign In</Text>

        <AppInput
          style={styles.email}
          label="Email Address"
          keyboardType="email-address"
          error={form?.email && !validateEmail(form?.email)}
          sucsess={validateEmail(form?.email)}
          onChangeText={onChangeTextEmail}
        />
        <AppInput
          style={styles.password}
          label="Password"
          secureTextEntry={form?.showPassword}
          error={form?.password && form?.password?.length < 7}
          onChangeText={onChangeTextPassword}
          onShowPassword={onShowPassword}
        />
        <TouchableOpacity style={styles.ForgotPasswordBtn}>
          <Text style={styles.ForgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <AppButton
          title="Sign In"
          withArrow={true}
          backgroundColor={Images.Sign_in_Button}
          appStyle={styles.signin}
          disabled={form?.buttonDisabled}
          onPress={loginAction}
          loading={loading}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Signin;
