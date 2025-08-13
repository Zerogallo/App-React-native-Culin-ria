import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../img/logo_churrasc.jpg")}
        style={styles.boxImg}
      />
    </View>
  );
}
