import { View, Text, Image, Alert } from "react-native";

import { styles } from "./styles";

import { Input } from "../../../components/input";
import { Button } from "../../../components/Button";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function Longi() {
  const [emall, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");
  const [icon, setIcon] = useState(true);

  function getLogin() {
    try {
      if (!emall || !passWord) {
        return Alert.alert("Atenção", "Informe os campos obrigatorios!");
      }
      Alert.alert("Logado", "Com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../../img/icon.png")} />
      <Text style={styles.textos}>Login</Text>
      <View style={styles.fundo}>
        <Input
          label={"Nome:"}
          icon={"person-outline"}
          value={emall}
          onChangeText={setEmail}
        />

        <Input
          label={"Senha:"}
          isPasswod={icon}
          icon={icon ? "eye-off-outline" : "eye-outline"}
          value={passWord}
          onChangeText={setpassWord}
          onPress={() => setIcon(!icon)}
        />
      </View>
      <Button label={"Enter"} onPress={getLogin} />

      <View style={styles.iconcont}>
        <Ionicons name="logo-google" style={styles.icon} />
        <Ionicons name="logo-facebook" style={styles.icon} />
      </View>
    </View>
  );
}
