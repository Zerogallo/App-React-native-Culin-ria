import { View, Text } from "react-native";
import { styles } from "./styles";
import Card from "../../components/card";
import Header from "../../components/header";

export default function Cardapio(props) {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Cardapio</Text>
        <Card />
      </View>
    </>
  );
}
