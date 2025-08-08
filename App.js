import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";

import { styles } from "./App.styles";
import Longi from "./src/page/longi/longiP1";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="auto" />
        <Longi />
      </SafeAreaView>
    </View>
  );
}
