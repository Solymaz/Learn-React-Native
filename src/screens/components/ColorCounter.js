import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function ColorCounter({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
}

const styles = StyleSheet.create({});
