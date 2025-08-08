import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: colors.text,
    marginBottom: 8,
    fontSize: 14,
  },
  input: {
    backgroundColor: colors.inputBackground,
    color: colors.text,
    fontSize: 24,
    fontWeight: "bold",

    borderRadius: 8,
    width: "80%",
  },
  boxInput: {
    backgroundColor: colors.inputBackground,
    color: colors.text,
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    borderRadius: 8,
  },
  icon: {
    fontSize: 24,
    color: colors.text,
  },
});
