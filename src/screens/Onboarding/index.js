import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import styles from "./styles";
import { Images } from "../../constants";
import { AppButton } from "../../components";
const Onboarding = ({ navigation }) => {
  const signinAction = () => {
    navigation.navigate("Signin");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.onboarding_background}
        style={styles.onboarding_background}
      >
        <Image source={Images.Logo_White} style={styles.Logo_White} />
        <Text style={styles.Welcome}>Welcome</Text>
      </ImageBackground>
      <AppButton
        title="Sign In"
        withArrow={true}
        backgroundColor={Images.Sign_in_Button}
        appStyle={styles.signin}
        onPress={signinAction}
      />
      <AppButton title="Sign Up" withArrow={true} appStyle={styles.Signup} />
    </View>
  );
};

export default Onboarding;
