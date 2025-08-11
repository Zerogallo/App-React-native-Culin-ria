import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 4,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.text,
    fontWeight: "500",
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
});
