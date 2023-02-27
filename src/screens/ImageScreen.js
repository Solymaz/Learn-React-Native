import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "./components/ImageDetail";

export default function ImageScreen() {
  return (
    <View>
      <Text>Image Screen</Text>
      <ImageDetail
        imageName="forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore={5}
      />
      <ImageDetail
        imageName="mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore="9"
      />
      <ImageDetail
        imageName="beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore="4"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
