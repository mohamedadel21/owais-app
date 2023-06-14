import React from "react";
import { COLORS, ScaleWidth } from "../../constants";
import { TextInput } from "react-native-paper";

const AppInput = ({
  style,
  label,
  onChangeText,
  error,
  secureTextEntry,
  onShowPassword,
  keyboardType,
  sucsess,
}) => {
  return (
    <TextInput
      style={style}
      label={label}
      secureTextEntry={secureTextEntry}
      underlineColor={COLORS.primary}
      activeUnderlineColor={COLORS.primary}
      error={error}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      right={
        label == "Password" ? (
          <TextInput.Icon
            icon={secureTextEntry ? "eye" : "eye-off"}
            iconColor={COLORS.black}
            size={ScaleWidth(20)}
            onPress={onShowPassword}
          />
        ) : sucsess ? (
          <TextInput.Icon
            icon={"check"}
            iconColor={COLORS.purple}
            size={ScaleWidth(20)}
          />
        ) : null
      }
    />
  );
};

export default AppInput;
