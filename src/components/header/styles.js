import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textsecondary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  boxImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 20,
    top: 20,
  },
  boxBusca: {
    width: 300,
    height: 200,
    top: 40,
  },
});
