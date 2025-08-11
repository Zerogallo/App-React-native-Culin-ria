import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textsecondary,
    borderRadius: 8,
    padding: 40,
    margin: 10,
    flexDirection: "row",
  },

  boxImg: {
    width: 100,
    height: 100,
    backgroundColor: colors.background,
    borderRadius: 8,
    top: 30,
    margin: 20,
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
    margin: 20,
  },
  boxContText: {
    width: 200,
  },
  boxButt: {
    top: 150,
  },
  fim: {
    margin: 100,
  },
});
