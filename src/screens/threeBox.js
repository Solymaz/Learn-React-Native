import React from "react";
import { View, StyleSheet } from "react-native";

export default function threeBox() {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.style1} />
      <View style={styles.style2} />
      <View style={styles.style3} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  style1: {
    borderWidth: 3,
    borderColor: "red",
    height: 50,
    width: 50,
  },
  style2: {
    borderWidth: 3,
    borderColor: "blue",
    height: 50,
    width: 50,
    top: 50,
  },
  style3: {
    borderWidth: 3,
    borderColor: "green",
    height: 50,
    width: 50,
  },
});
