import { usePalette } from '@/hooks/useThemeColor';
import { GainData, PersonalRecord } from '@/models/gain-data.model';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, { Extrapolation, interpolate, interpolateColor, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

export type GainCarouselItemProps = {
  item: PersonalRecord;
  index: number;
  scrollX: SharedValue<number>;
};
const { width, height } = Dimensions.get('screen');
const { primary, light, secondary } = usePalette('dark');

export default function PersonalRecordCarouselItem({item, index, scrollX}: GainCarouselItemProps) {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.3 , 0, width * 0.3],
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
        {
          rotate: `${interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-30, 0, 30],
            Extrapolation.CLAMP
          )}deg`
        },
      ],
      opacity: interpolate(
        scrollX.value,
        [(index - 1) * width, index * width, (index + 1) * width],
        [0.5, 1, 0.5],
        Extrapolation.CLAMP
      ),
    }
  });
  const cardColorAnimationStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollX.value,
        [(index - 1) * width, index * width, (index + 1) * width],
        [secondary, primary, secondary],
        "RGB"
      )
    }
  });
  return (
    <Animated.View style={[styles.container, rnAnimatedStyle]}>
      <Animated.View style={[styles.card, cardColorAnimationStyle]}>
        <Text style={styles.text}>{item.exercise?.name}</Text>
        <Text style={{
          ...styles.text,
          textAlign: "right",
          fontSize: 30,       
        }}>{item.weight}kg</Text>
      </Animated.View>
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
