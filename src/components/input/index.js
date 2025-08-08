import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export function Input({
  value,
  onChangeText,
  label,
  isPasswod,
  icon,
  onPress,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.boxInput}>
        <TextInput
          style={styles.input}
          placeholder=""
          placeholderTextColor="#94a3b8"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPasswod}
        />
        <TouchableOpacity onPress={onPress}>
          <Ionicons name={icon} style={styles.icon}></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
}
