import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { usePalette } from '@/hooks/useThemeColor';
import { useLocalSearchParams } from 'expo-router';

const { black, light } = usePalette('dark');

export default function GainStats() {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: light}}>GainStats of {id} </Text>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: black,
    gap: 20,
  },
  statIconContainer: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 20,
  }
});