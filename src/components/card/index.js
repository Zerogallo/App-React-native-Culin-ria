import { View, Text, Image, ScrollView } from "react-native";
import { categorias } from "../../services/categorias";
import { styles } from "./styles";
import { Button } from "../Button";

export default function Card() {
  return (
    <>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {categorias.map((item) => (
            <View>
              <View key={item.idCategoria} style={styles.container}>
                <View>
                  <Image source={item.strCategoryImage} style={styles.boxImg} />
                  <View style={styles.boxText}>
                    <Text style={styles.titlo}>{item.strCategory}</Text>
                    <Text style={styles.boxContText}>
                      {item.strCategoryDescription}
                    </Text>
                  </View>
                </View>
                <View style={styles.boxButt}>
                  <Text style={styles.Valor}>R$:{item.strValor}</Text>
                  <Button label={"Adicionar"} icon={"log-in-outline"} />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
