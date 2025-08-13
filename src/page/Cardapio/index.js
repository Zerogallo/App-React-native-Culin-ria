import { View, Image } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Card from "../../components/card";
import CardB from "../../components/cardB";
import { styles } from "./styles";

const Tab = createMaterialTopTabNavigator();

export default function Cardapio() {
  return (
    <>
      <View style={styles.container}></View>
      <Tab.Navigator initialRouteName="Cardapio">
        <Tab.Screen
          name="Cardapio"
          component={Card}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.boxCont}>
                <Image
                  source={require("../../img/curry.png")}
                  style={styles.boxImg}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Bebida"
          component={CardB}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.boxCont}>
                <Image
                  source={require("../../img/licor.png")}
                  style={styles.boxImg}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
