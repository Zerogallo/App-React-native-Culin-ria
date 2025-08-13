import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

import { styles } from "./styles";
import Header from "../../components/header";
import { categorias } from "../../services/categorias";
import Card from "../../components/card";

export default function HomeScreen() {
  const { width } = Dimensions.get("window");

  return (
    <>
      <Header />

      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={({ nativeEvent }) => {
            const slide = Math.ceil(
              nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
            );
          }}
          scrollEventThrottle={16}
        >
          {categorias.map((item) => (
            <Image
              key={item.idCategoria}
              source={item.strCategoryImage}
              style={styles.imgCard}
              resizeMode="cover"
            />
          ))}
        </ScrollView>

        <Card />
      </View>
    </>
  );
}
