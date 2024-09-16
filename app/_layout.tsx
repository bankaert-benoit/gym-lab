import HeaderBar from "@/components/header/HeaderBar";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { usePalette } from "@/hooks/useThemeColor";
import { State } from "@/models/state.model";
import { Router, Slot, Stack, useRouter, useSegments } from "expo-router";
import { Auth, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";

export default function RootLayout() {
  const { primary, dark } = usePalette('dark');
  const auth: Auth = FIREBASE_AUTH;
  const [initializing, setInitializing]: State<boolean> = useState<boolean>(true);
  const [user, setUser]: State<User | null> = useState<User | null>(null);
  const router: Router = useRouter();
  const segments = useSegments();

  const onAuthStateChanged = (user: User | null) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (initializing) return;

    const inAuthGroup = segments[0] === '(auth)';

    if(user && !inAuthGroup) {
      router.replace('/(auth)/(tabs)/hall-of-gain');
    } else if (!user && inAuthGroup) {
      router.replace('/');
    }

  }, [user, initializing]);

  if (initializing) {
    return (
      <SafeAreaView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: dark
      }}>
        <ActivityIndicator size={"large"} color={primary} />
      </SafeAreaView>
    );
  }

  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" /> 
    </Stack>
  );
}  
