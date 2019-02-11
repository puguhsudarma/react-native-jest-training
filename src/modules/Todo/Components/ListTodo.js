// @flow

import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { styles as s } from "react-native-style-tachyons";

type ListTodoPropTypes = {
  todoComplete: Array<{
    todo: string,
    isComplete: boolean
  }>,
  todoInComplete: Array<{
    todo: string,
    isComplete: boolean
  }>
};

const ListTodo = (props: ListTodoPropTypes) => {
  return (
    <ScrollView contentContainerStyle={[s.aifs, s.jcc, { marginTop: 30 }]}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          textAlign: "center",
          textDecorationLine: "underline",
          color: "#000"
        }}
      >
        {"TODO TODAY COMPLETE: "}
      </Text>
      {props.todoComplete.map(todo => {
        return (
          <Text
            key={todo}
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "#000"
            }}
          >
            {`- ${todo.todo}`}
          </Text>
        );
      })}

      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          textAlign: "center",
          textDecorationLine: "underline",
          color: "red"
        }}
      >
        {"TODO TODAY INCOMPLETE: "}
      </Text>
      {props.todoInComplete.map(todo => {
        return (
          <Text
            key={todo}
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "#000"
            }}
          >
            {`- ${todo.todo}`}
          </Text>
        );
      })}
    </ScrollView>
  );
};

export default ListTodo;
