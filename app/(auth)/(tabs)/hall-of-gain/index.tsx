import PersonalRecordCarousel from "@/components/hall-of-gain/PersonalRecordCarousel";
import ItemLine from "@/components/ItemLine";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { usePalette } from "@/hooks/useThemeColor";
import { GainData, PersonalRecord } from "@/models/gain-data.model";
import { State } from "@/models/state.model";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const palette = usePalette('dark');

export default function HallOfGain() {
  const auth = FIREBASE_AUTH;
  const data: PersonalRecord[] = [
    {
      id: 1,
      weight: 170,
      exercise: {
        id: "1",
        name: "Bench Press",
        muscles: [],
      }

    },
    {
      id: 2,
      weight: 200,
      exercise: {
        id: "2",
        name: "Squat",
        muscles: [],
      }
    },
    {
      id: 3,
      weight: 250,
      exercise: {
        id: "3",
        name: "Deadlift",
        muscles: [],
      }
    },
  ];

  const history: { date: Date, weight: number }[] = [
    {
      date: new Date(),
      weight: 170,
    },
    {
      date: new Date(),
      weight: 200,
    },
    {
      date: new Date(),
      weight: 250,
    },
  ];

  const [currentIdx, setCurrentIdx]: State<number> = useState<number>(0);

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.statIconContainer}>
        <Link href={{
          pathname: '/hall-of-gain/[id]',
          params: { id: data[currentIdx].exercise?.name as string }
        }}>
          <MaterialCommunityIcons color={palette.light} size={28} name="chart-box-outline"/>
        </Link>
          <Button color={palette.primary} title="Sign out" onPress={() => {
            auth.signOut();
          }} />
      </View>
      <PersonalRecordCarousel datas={data} setCurrentIndex={setCurrentIdx} />
      <ItemLine color={palette.darkGray} textColor={palette.light} item={['test', 'oui']} />
     
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