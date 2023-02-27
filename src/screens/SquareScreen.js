import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "./components/ColorCounter";

const COLOR_INCREMENT = 15;

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColor = (color, change) => {
    // color === "red", "blue", "green"
    // change === +15, -15
    switch (color) {
      case "red":
        if (red + change > 255 || red + change < 0) {
          return;
        } else {
          setRed(red + change);
        }
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case "green":
        if (green + change > 255 || green + change < 0) {
          return;
        } else {
          setGreen(green + change);
        }
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => setColor("red", +COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="blue"
        onIncrease={() => setColor("blue", +COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="green"
        onIncrease={() => setColor("green", +COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${blue}, ${green})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
