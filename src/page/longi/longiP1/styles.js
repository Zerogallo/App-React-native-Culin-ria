import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.text,
    alignItems: "center",
    justifyContent: "center",
  },
  fundo: {
    backgroundColor: colors.textsecondary,
    color: colors.text,
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
    borderRadius: 8,
    width: "100%",
  },
  textos: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 26,
  },
  icon: {
    fontSize: 50,
    color: colors.primary,
    padding: 26,
  },
  iconcont: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -4,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    padding: 26,
  },
});
