import { ThemedView } from "@/components/ThemedView";
import { usePalette } from "@/hooks/useThemeColor";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Today() {
  const palette = usePalette('dark');
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: palette.black,
    }}>
      <Text style={{
        color: palette.light,
      }}>Edit app/%28tabs%29/today.tsx to edit this screen.</Text>
    </SafeAreaView>
  );
}