import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  // state = { count : 0}
  // action = { type: "increment" || "decrement", payload: 1 }

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };

    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return;
  }
};

export default function CounterScreen2() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Text>{state.count}</Text>
      <Button
        title="increase"
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      />
      <Button
        title="decrease"
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
