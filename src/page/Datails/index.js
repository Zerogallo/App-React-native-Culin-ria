import { View, Text } from "react-native";
import { styles } from "./styles";
import Header from "../../components/header";

export default function DetailsScreen() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Datails</Text>
      </View>
    </>
  );
}
