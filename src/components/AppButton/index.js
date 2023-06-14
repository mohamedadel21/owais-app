import React from "react";
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  View,
} from "react-native";
import { COLORS, ScaleWidth } from "../../constants";
import styles from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";

const AppButton = ({
  onPress,
  title,
  backgroundColor,
  disabled,
  loading,
  withArrow,
  appStyle,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, appStyle, disabled ? { opacity: 0.5 } : null]}
    >
      <ImageBackground
        source={backgroundColor}
        style={[
          styles.ImageBackground,
          !backgroundColor
            ? {
                borderWidth: ScaleWidth(1),
                borderColor: COLORS.primary,
                borderRadius: ScaleWidth(25),
              }
            : {},
        ]}
        imageStyle={styles.imageStyle}
      >
        {loading ? (
          <ActivityIndicator size="small" color={COLORS.white} />
        ) : (
          <Text
            style={[
              styles.txt,
              !backgroundColor ? { color: COLORS.primary } : null,
            ]}
          >
            {title}
          </Text>
        )}
        {withArrow ? (
          <View style={styles.arrowView}>
            <AntDesign
              name="arrowright"
              size={ScaleWidth(20)}
              color={backgroundColor ? COLORS.white : COLORS.primary}
            />
          </View>
        ) : null}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default AppButton;
