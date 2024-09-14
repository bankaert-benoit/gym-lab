import { GainCardData } from "@/models/GainCardData"
import { Component, ReactNode, useRef, useState } from "react"
import { Animated, FlatList, LayoutChangeEvent, LayoutRectangle, ScrollView, Text } from "react-native"
import CardSelector from "./CardSelector"
import { usePalette } from "@/hooks/useThemeColor"

export type HorizontalScrollViewProps = {
  datas: GainCardData[]
}

export default function HorizontalScrollView({ datas }: HorizontalScrollViewProps) {
  const palette = usePalette('dark');
  const [scrollViewWidth, setScrollViewWidth] = useState(0)
  const boxWidth = scrollViewWidth * 0.8;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;

  const pan = useRef(new Animated.ValueXY()).current;

  return (
    <>
      <Text style={{ color: palette.light, fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        {scrollViewWidth} - 
        {boxWidth} - 
        {boxDistance} - 
        {halfBoxDistance} - 
      </Text>
      <FlatList
        data={datas}
        horizontal
        style={{ 
          backgroundColor: palette.secondary,
          height: "auto"
        }}
        contentContainerStyle={{ paddingVertical: 10 }}
        contentInsetAdjustmentBehavior="never"
        snapToAlignment="center"
        decelerationRate="fast"
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={1}
        snapToInterval={boxWidth}
        contentInset={{
          left: halfBoxDistance,
          right: halfBoxDistance,
        }}
        contentOffset={{x: ((boxWidth) / 2) * -1, y: 0}}
        onLayout={(event: LayoutChangeEvent) => {
          setScrollViewWidth(event.nativeEvent.layout.width)
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: pan.x }}}],
          { useNativeDriver: false }
        )}
        keyExtractor={(item, index) => `${index}-${item}`}
        renderItem={({ item, index }) => (
          <Animated.View
            style={{
              transform: [
                {
                  scale: pan.x.interpolate({
                    inputRange: [
                      (index - 1) * boxWidth - halfBoxDistance,
                      index * boxWidth - halfBoxDistance,
                      (index + 1) * boxWidth - halfBoxDistance,
                    ],
                    outputRange: [0.8, 1, 0.8],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <CardSelector title={item.title} data={item.data} textColor={palette.light} cardStyle={{
                backgroundColor: palette.primary,
                height: 250,
                borderRadius: 20,
                width: 250,
              }}/>
          </Animated.View>
        )}
      />
    </>
  )
}