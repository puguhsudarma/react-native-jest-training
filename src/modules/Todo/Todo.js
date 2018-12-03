// @flow

import React, { Component } from 'react';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';
import TextInputTodo from './Components/TextInputTodo';
import ButtonTodo from './Components/ButtonTodo';
import ListTodo from './Components/ListTodo';

type proptypes = {
    todos: [{
        todo: string,
        isComplete: boolean,
    }],
    insertTodo: (text: string) => void,
};

type statetypes = {
    text: string,
    todoComplete: object[],
    todoIncomplete: object[],
};

export default class Todo extends Component<proptypes, statetypes> {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            todoComplete: [],
            todoIncomplete: [],
        };

        this._refTextInput = null;
        this._extractTodos = this._extractTodos.bind(this);
        this._handleRefTextInput = this._handleRefTextInput.bind(this);
        this._handleAction = this._handleAction.bind(this);
        this._onChangeText = this._onChangeText.bind(this);
    }

    componentDidMount() {
        this._extractTodos();
    }

    _extractTodos() {
        this.setState((prevState) => {
            return {
                ...prevState,
                todoComplete: this.props.todos.filter(({ isComplete }) => isComplete),
                todoIncomplete: this.props.todos.filter(({ isComplete }) => !isComplete),
            };
        });
    }

    _handleRefTextInput(ref) {
        this._refTextInput = ref;
    }

    _handleAction() {
        if (this.state.text.length >= 0) {
            this.props.insertTodo(this.state.text);
            this.setState({ text: '' });
        }
    }

    _onChangeText(text) {
        this.setState({ text });
    }

    render() {
        return (
            <SafeAreaView style={[s.flx_i, { padding: 10 }]}>
                <TextInputTodo
                    refTextInput={this._handleRefTextInput}
                    value={this.state.text}
                    onChangeText={this._onChangeText}
                    onSubmitEditing={this._handleAction}
                />

                <ButtonTodo action={this._handleAction} />

                <ListTodo
                    todoComplete={this.state.todoComplete}
                    todoInComplete={this.state.todoIncomplete}
                />
            </SafeAreaView>
        );
    }
}
