import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.text,
    alignItems: "center",
    justifyContent: "center",
  },
  imgCard: {
    top: 150,
    borderRadius: 8,
    width: 450,
  },
});
