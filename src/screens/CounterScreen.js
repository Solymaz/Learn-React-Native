import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function CounterScreen(props) {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>{counter}</Text>
      <Button title="increase" onPress={() => setCounter(counter + 1)} />
      <Button title="decrease" onPress={() => setCounter(counter - 1)} />
    </View>
  );
}
const styles = StyleSheet.create({});
