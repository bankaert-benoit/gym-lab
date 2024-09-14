import { usePalette } from '@/hooks/useThemeColor';
import { GainData } from '@/models/GainData';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

export type GainCarouselItemProps = {
  item: GainData;
  index: number;
  scrollX: SharedValue<number>;
};
const { width, height } = Dimensions.get('screen');
const { primary, light } = usePalette('dark');

export default function GainCarouselItem({item, index, scrollX}: GainCarouselItemProps) {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.25 , 0, width * 0.25],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.8, 1, 0.8],
            Extrapolation.CLAMP
          )
        },
      ],
    }
  });
  return (
    <Animated.View style={[styles.container, rnAnimatedStyle]}>
      <View style={styles.card}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={{
          ...styles.text,
          textAlign: "right",
          fontSize: 30,       
        }}>{item.data}kg</Text>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height/3
  },
  card: {
    backgroundColor: primary,
    borderRadius: 20,
    height: "100%",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: light,
    fontSize: 20,
    width: "100%",
    fontWeight: "bold",
  }
});
