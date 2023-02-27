import React, { useReducer } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "./components/ColorCounter";

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
  // state === { red: number, blue: number, green: number }
  // action === { colorToChange: "red" || "green" || "blue", payload: 15 || -15 }
  // #rule: we never change state values directly
  switch (action.type) {
    case "change_red":
      if (state.red + action.payload > 255 || state.red + action.payload < 0) {
        // we have to always return something from reducer
        return state;
      }
      return { ...state, red: state.red + action.payload };

    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    default:
      return state;
  }
};
export default function SquareScreen2() {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
  const { red, green, blue } = state;
  // console.log(state)  =   { red: 0, blue: 0, green: 0 }

  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
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
