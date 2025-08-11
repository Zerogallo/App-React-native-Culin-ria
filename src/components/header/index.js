import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Input } from "../input";
import { Button } from "../Button";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../img/logo_churrasc.jpg")}
        style={styles.boxImg}
      />
      <View style={styles.boxBusca}>
        <Input icon={"search-outline"} />
        <Button label={"busca"} />
      </View>
    </View>
  );
}
