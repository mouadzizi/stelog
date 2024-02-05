import { StyleSheet } from "react-native";
import { COLORS } from "../../../globalStyle.style";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  infoLabel: {
    color: "#555",
    fontWeight: "bold",
    marginRight: 10,
    fontSize: 18,
  },
  infoText: {
    color: COLORS.grey,
    fontSize: 18,
    flex: 1,
  },
});
