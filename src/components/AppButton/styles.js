import { StyleSheet } from "react-native";
import { COLORS, ScaleHeight, ScaleWidth, width } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: width - ScaleWidth(50),
    height: ScaleHeight(60),
    alignSelf: "center",
    marginTop: ScaleHeight(50),
  },
  ImageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    resizeMode: "cover",
    paddingHorizontal: ScaleWidth(20),
  },
  imageStyle: {
    borderRadius: ScaleWidth(25),
  },
  txt: {
    fontSize: ScaleWidth(18),
    color: COLORS.white,
    textAlign: "center",
  },
  arrowView: {
    flexGrow: 1,
    alignItems: "flex-end",
  },
});

export default styles;
