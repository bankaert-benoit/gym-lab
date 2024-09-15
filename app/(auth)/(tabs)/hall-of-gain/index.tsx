import GainCarousel from "@/components/hall-of-gain/GainCarousel";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { usePalette } from "@/hooks/useThemeColor";
import { GainData } from "@/models/GainData";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const palette = usePalette('dark');

export default function HallOfGain() {
  const auth = FIREBASE_AUTH;
  const data: GainData[] = [
    {
      id: 1,
      title: "Benchpress",
      data: 155,
    },
    {
      id: 2,
      title: "Squat",
      data: 200,
    },
    {
      id: 3,
      title: "Deadlift",
      data: 250,
    },
  ];

  const [currentIdx, setCurrentIdx] = useState<number>(0);

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.statIconContainer}>
        <Link href={{
          pathname: '/hall-of-gain/[id]',
          params: { id: data[currentIdx].title }
        }}>
          <MaterialCommunityIcons color={palette.light} size={28} name="chart-box-outline"/>
        </Link>
          <Button color={palette.primary} title="Sign out" onPress={() => {
            auth.signOut();
          }} />
      </View>
      <GainCarousel datas={data} setCurrentIndex={setCurrentIdx} />
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: palette.black,
    gap: 20,
  },
  statIconContainer: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 20,
  }
});