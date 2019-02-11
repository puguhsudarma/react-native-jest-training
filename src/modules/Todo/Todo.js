// @flow

import React, { Component } from "react";
import { SafeAreaView, View, ActivityIndicator } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import TextInputTodo from "./Components/TextInputTodo";
import ButtonTodo from "./Components/ButtonTodo";
import ListTodo from "./Components/ListTodo";

type proptypes = {
  todoComplete: Array<{
    todo: string,
    isComplete: boolean
  }>,
  todoIncomplete: Array<{
    todo: string,
    isComplete: boolean
  }>,
  insertTodo: (text: string) => void
};

type statetypes = {
  text: string
};

export default class Todo extends Component<proptypes, statetypes> {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this._handleAction = this._handleAction.bind(this);
    this._onChangeText = this._onChangeText.bind(this);
  }

  _handleAction() {
    if (this.state.text.length >= 0) {
      this.props.insertTodo(this.state.text);
      this.setState({ text: "" });
    }
  }

  _onChangeText(text) {
    this.setState({ text });
  }

  render() {
    return (
      <SafeAreaView style={[s.flx_i, { padding: 10 }]}>
        <TextInputTodo
          value={this.state.text}
          onChangeText={this._onChangeText}
          onSubmitEditing={this._handleAction}
        />

        <ButtonTodo action={this._handleAction} />

        <ListTodo
          todoComplete={this.props.todoComplete}
          todoInComplete={this.props.todoIncomplete}
        />
      </SafeAreaView>
    );
  }
}
