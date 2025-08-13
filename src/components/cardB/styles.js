import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textsecondary,
    borderRadius: 8,
    padding: 5,
    margin: 5,
    flexDirection: "row",
  },

  boxImg: {
    width: 100,
    height: 100,
    backgroundColor: colors.background,
    borderRadius: 8,
    margin: 5,
  },
  titlo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Valor: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
  },

  boxText: {
    margin: 5,
  },
  boxContText: {
    width: 200,
  },
  boxButt: {
    top: 50,
    left: 100,
  },
});
