import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import Header from "../../components/header";
import Card from "../../components/card";
import CardB from "../../components/cardB";

export default function Cardapio() {
  return (
    <>
      <Header />

      <TouchableOpacity style={styles.container}>
        <View style={styles.boxCont}>
          <Image
            source={require("../../img/curry.png")}
            style={styles.boxImg}
          />
          <Text style={styles.boxtext}>Cardapio</Text>
        </View>
        <View style={styles.boxCont}>
          <Image
            source={require("../../img/licor.png")}
            style={styles.boxImg}
          />
          <Text style={styles.boxtext}>Bebida</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
