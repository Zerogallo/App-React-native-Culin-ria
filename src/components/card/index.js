import { View, Text, Image, ScrollView } from "react-native";
import { categorias } from "../../services/categorias";
import { styles } from "./styles";

export default function Card() {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        {categorias.map((item) => (
          <View key={item.idCategoria} style={styles.container}>
            <Image source={item.strCategoryImage} style={styles.boxImg} />
            <View style={styles.boxText}>
              <Text style={styles.titlo}>{item.strCategory}</Text>
              <Text>{item.strCategoryDescription}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
