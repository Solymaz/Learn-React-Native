import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

export default function TextScreen() {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 5 && (
        <Text>Password should be at least 5 characters long!"</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
