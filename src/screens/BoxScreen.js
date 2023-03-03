import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BoxScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>Child 1</Text>
      <Text style={styles.textStyle2}>Child 2</Text>
      <Text style={styles.textStyle3}>Child 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
  },
  textStyle1: {
    borderWidth: 3,
    borderColor: "red",
    // alignItems:
    // justifyContent works the opposite of allignitems
    // alignItems & justifyContent & flexDirection are applied to the parent
    // flex & alignSelf are applied to the child
    // alignSelf overwrites the value of allignItems and by default it is stretch which is going to take all the possible space
    flex: 1,
  },
  textStyle2: {
    borderWidth: 3,
    borderColor: "blue",
    ...StyleSheet.absoluteFillObject, // position: absolute - top, bottom, left, right, 0
    zIndex: 2,
  },
  textStyle3: {
    borderWidth: 3,
    borderColor: "red",
    flex: 2,
  },
});
