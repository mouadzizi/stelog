import { StyleSheet } from "react-native";
import { COLORS } from "../../../globalStyle.style";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  articleButton: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedArticle: {
    backgroundColor: "#4CAF50",
    color: "#fff",
  },
  articleButtonText: {
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
