import { StyleSheet } from "react-native";
import { COLORS } from "../../../globalStyle.style";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    margin: 10,
    padding: 15,
    elevation: 3,
  },
  containerInfo: {
    backgroundColor: COLORS.white,
    flex: 10,
  },
  deleteContainer: {
    flex: 3,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
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
    fontSize: 10,
    color: "#333",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: COLORS.white,
  },
});
