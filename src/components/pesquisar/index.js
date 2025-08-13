import { View, Text, StatusBar, ScrollView } from "react-native";
import React, { useState } from "react";
import { Input } from "../input";
import { categorias } from "../../services/categorias";

export default function Pesquisar() {
  const [pesq, setpesq] = useState("");
  return (
    <View>
      <StatusBar />
      <Input label={"Pesquisar"} onChangeText={setpesq} />
      <ScrollView>
        {categorias
          .filter((val) => {
            if (pesq === "") {
              return val;
            } else if (
              val.idCategoria.toLowerCase().includes(pesq.toLocaleLowerCase())
            ) {
            }
          })
          .map((item) => {
            <Text key={item.idCategoria}>{item.strCategory}</Text>;
          })}
      </ScrollView>
    </View>
  );
}
