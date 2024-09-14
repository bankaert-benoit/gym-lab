import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

export default function HeaderBar() {
  return (
    <View style={{
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      height: 50,
      borderBottomWidth: 1,
    }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>App</Text>
    </View>
  )
}