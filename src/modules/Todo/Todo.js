// @flow

import React, { Component } from 'react';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';
import TextInputTodo from './Components/TextInputTodo';
import ButtonTodo from './Components/ButtonTodo';
import ListTodo from './Components/ListTodo';

type proptypes = {
    todos: string[],
    insertTodo: (text: string) => object,
    getTodo: () => object,
};

type statetypes = {
    text: string,
    loading: boolean,
};

export default class Todo extends Component<proptypes, statetypes> {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            loading: false,
        };

        this._refTextInput = null;
        this._fetchTodo = this._fetchTodo.bind(this);
        this._handleAction = this._handleAction.bind(this);
        this._onChangeText = this._onChangeText.bind(this);
        this._handleRefTextInput = this._handleRefTextInput.bind(this);
    }

    componentDidMount() {
        this._fetchTodo();
    }

    _fetchTodo() {
        this.setState({ loading: true });
        this.props.getTodo(() => this.setState({ loading: false }));
    }

    _handleAction() {
        this.setState({ loading: true })
        this.props.insertTodo(
            this.state.text,
            () => this.setState({ loading: false }),
            () => {
                this.setState({ loading: false });
                setTimeout(this._refTextInput.focus, 500);
            },
        );
    }

    _onChangeText(text) {
        this.setState({ text });
    }

    _handleRefTextInput(ref) {
        this._refTextInput = ref;
    }

    render() {
        return (
            <SafeAreaView style={[s.flx_i, { padding: 10 }]}>
                <TextInputTodo
                    refTextInput={this._handleRefTextInput}
                    editable={!this.state.loading}
                    value={this.state.text}
                    onChangeText={this.onChangeText}
                    onSubmitEditing={this._handleAction}
                />

                <ButtonTodo
                    action={this._handleAction}
                    disabled={this.state.loading}
                />

                <View style={[s.jcc, s.aic, {
                    height: 50,
                }]}>
                    {
                        this.state.loading &&
                        <ActivityIndicator size="large" />
                    }
                </View>

                <ListTodo todos={this.props.todos} />
            </SafeAreaView>
        );
    }
}
