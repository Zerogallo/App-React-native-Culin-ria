import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../page/Home";
import DetailsScreen from "../page/Datails";
import Cardapio from "../page/Cardapio";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/colors";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Cardapio"
        component={Cardapio}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "restaurant" : "restaurant-outline"}
              size={30}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            color: colors.background,
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={30} />
          ),
          tabBarIconStyle: {
            top: -40,
            backgroundColor: colors.primary,
            borderRadius: "50%",
            width: 80,
            height: 80,
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            top: -70,
            color: colors.background,
          },
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "receipt" : "receipt-outline"}
              size={30}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            color: colors.background,
          },
        }}
      />
    </Tab.Navigator>
  );
}
