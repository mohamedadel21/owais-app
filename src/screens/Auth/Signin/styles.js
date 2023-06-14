import React from "react";
import { StyleSheet } from "react-native";
import {
  COLORS,
  height,
  ScaleHeight,
  ScaleWidth,
  width,
} from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  scroll: {
    flexGrow: 1,
  },
  Signin_background: {
    width: width - ScaleWidth(50),
    height: height / 2.9,
    resizeMode: "contain",
    alignSelf: "flex-start",
  },
  Logo_White: {
    width: ScaleWidth(60),
    height: ScaleWidth(60),
    marginLeft: ScaleWidth(40),
    marginTop: ScaleWidth(70),
  },
  Welcome: {
    marginLeft: ScaleWidth(40),
    marginTop: ScaleWidth(10),
    fontSize: ScaleWidth(22),
    color: COLORS.white,
  },
  signupText: {
    marginTop: ScaleHeight(50),
    fontSize: ScaleWidth(22),
    color: COLORS.black,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: ScaleWidth(25),
  },
  signin: {
    marginTop: ScaleHeight(70),
  },
  email: {
    width: width - ScaleWidth(50),
    height: ScaleWidth(50),
    backgroundColor: COLORS.white,
    marginTop: ScaleHeight(50),
  },
  password: {
    width: width - ScaleWidth(50),
    height: ScaleWidth(50),
    backgroundColor: COLORS.white,
    marginTop: ScaleHeight(20),
  },
  ForgotPassword: {
    fontSize: ScaleWidth(13),
    color: COLORS.primary,
  },
  ForgotPasswordBtn: {
    marginTop: ScaleHeight(20),
    alignSelf: "flex-start",
    marginLeft: ScaleWidth(5),
  },
});

export default styles;
