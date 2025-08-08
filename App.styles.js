import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "./src/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.text,
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    backgroundColor: colors.textsecondary,
  },
});
