import { StyleSheet } from "react-native";
import { COLORS } from "../../../globalStyle.style";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    margin: 10,
    padding: 15,
    elevation: 3,
  },
  header: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  infoItem: {
    width: "50%",
    marginBottom: 10,
  },
  infoLabel: {
    color: "#666",
    fontWeight: "bold",
  },
  infoText: {
    color: "#333",
  },
});
