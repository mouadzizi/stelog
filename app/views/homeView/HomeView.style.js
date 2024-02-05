import { StyleSheet } from "react-native";
import { COLORS } from "../../../globalStyle.style";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  containerNoOrder: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignContent: "center",
    verticalAlign: "middle",
  },
  containerNoOrderText: {
    fontSize: 20,
    color: COLORS.primary,
    textAlign: "center",
    fontWeight: "bold",
  },
  ImageStSwiper: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },
});
