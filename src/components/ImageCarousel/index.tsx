import { View, Text, FlatList, Image, Dimensions, StyleSheet } from "react-native";
import React, { useState, useRef } from "react";

const { width, height } = Dimensions.get("window");

interface Props {
  images: string[];
}

export default function Index({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: { index: number }[] }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0);
      }
    }
  );

  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
        height: height * 0.25,
        paddingTop: 25,
      }}
    >
      <FlatList
        data={images}
        style={{ width: width * 0.5, height: height * 0.2 }}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width: width * 0.5, height: height * 0.2 }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.5}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: 30,
          height: 12,
          justifyContent: "space-around",
        }}
      >
        {images.map((image, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: activeIndex == index ? "#5d3ebd" : "#f2f0fd" },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 20,
  },
});
