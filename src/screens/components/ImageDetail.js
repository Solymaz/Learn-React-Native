import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ImageDetail(props) {
  return (
    <View>
      <Text>{props.imageName}</Text>
      <Image source={props.imageSource} />
      <Text>Image score - {props.imageScore} </Text>
    </View>
  );
}
const styles = StyleSheet.create({});
