import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

export default function List() {
  const friends = [
    { name: "friend 1", age: "20" },
    { name: "friend 2", age: "25" },
    { name: "friend 3", age: "26" },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({item}) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
