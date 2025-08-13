import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../page/login";
import { MyTabs } from "./Bottom.routes";
import Cardapio from "../page/Cardapio";

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Tabs" component={Cardapio} />
    </Stack.Navigator>
  );
}
