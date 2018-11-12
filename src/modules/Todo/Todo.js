// @flow

import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';
import TextInputTodo from './Components/TextInputTodo';
import ButtonTodo from './Components/ButtonTodo';
import ListTodo from './Components/ListTodo';

type proptypes = {
    todos: string[],
    insertTodo: (text: string) => object,
};

type statetypes = {
    text: string,
};

export default class Todo extends Component<proptypes, statetypes> {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };

        this._refTextInput = null;
        this._handleAction = this._handleAction.bind(this);
    }

    _handleAction() {
        if (this.state.text !== '') {
            this.props.insertTodo(this.state.text);
            this.setState({ text: '' });
        }
        setTimeout(this._refTextInput.focus, 500);
    }

    render() {
        return (
            <SafeAreaView style={[s.flx_i, { padding: 10 }]}>
                <TextInputTodo
                    refTextInput={(ref) => { this._refTextInput = ref; }}
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                    onSubmitEditing={this._handleAction}
                />

                <ButtonTodo
                    action={this._handleAction}
                />

                <ListTodo todos={this.props.todos} />
            </SafeAreaView>
        );
    }
}
