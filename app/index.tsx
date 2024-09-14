import { useThemePalette } from "@/hooks/useThemeColor";
import { Redirect, useRootNavigationState } from "expo-router";
import { ResultState } from "expo-router/build/fork/getStateFromPath";

export default function Index() {
  const rootNavigationState: ResultState = useRootNavigationState();

  if(!rootNavigationState?.key) return null;

  return (
    <Redirect href="/(tabs)/hall-of-gain" />
  )
}