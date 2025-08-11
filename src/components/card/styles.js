import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textsecondary,
    borderRadius: 8,
    padding: 20,
    margin: 20,
    flexDirection: "row",
  },
  boxImg: {
    width: 100,
    height: 100,
    backgroundColor: colors.background,
    borderRadius: 8,
    top: 20,
  },
  titlo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  boxText: {
    margin: 20,
  },
});
