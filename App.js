import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./src/routes/routes";

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
