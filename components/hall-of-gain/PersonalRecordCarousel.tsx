import { PersonalRecord } from "@/models/gain-data.model";
import { Dispatch, SetStateAction, useRef } from "react";
import { View, ViewToken } from "react-native";
import Animated, { ScrollHandlerProcessed, SharedValue, useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import PersonalRecordCarouselItem from "./PersonalRecordCarouselItem";

export type CarouselProps = {
  datas: PersonalRecord[],
  setCurrentIndex?: Dispatch<SetStateAction<number>>;
};


export default function PersonalRecordCarousel({ datas, setCurrentIndex }: CarouselProps) {
  const scrollX: SharedValue<number> = useSharedValue(0);
  const onScrollHandler: ScrollHandlerProcessed<Record<string, unknown>> = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    }
  });
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };
  const onViewableItemsChanged = ({viewableItems}: { viewableItems: ViewToken[]}) => {
    if (viewableItems[0].index !== undefined && viewableItems[0].index !== null && setCurrentIndex) {
      setCurrentIndex(viewableItems[0].index);
    }
  };
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <View>
      <Animated.FlatList 
        data={datas} 
        renderItem={({item, index}) => <PersonalRecordCarouselItem item={item} index={index} scrollX={scrollX} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
    </View>
  )
}