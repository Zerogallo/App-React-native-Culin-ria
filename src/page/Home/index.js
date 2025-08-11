import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import Header from "../../components/header";

export default function HomeScreen() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Image
          source={require("../../img/Flux_Dev_A_vibrant_closeup_photograph_of_a_sizzling_churrasco__3.jpg")}
        />
        <Text>Home</Text>
      </View>
    </>
  );
}
