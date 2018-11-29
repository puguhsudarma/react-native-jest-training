// @flow

import React from 'react';
import {
    View,
    TextInput,
} from 'react-native';

type TextInputTodoPropTypes = {
    refTextInput: (ref: any) => void,
    editable: boolean,
    value: string,
    onChangeText: (text: string) => void,
    onSubmitEditing: () => void,
};

const TextInputTodo = (props: TextInputTodoPropTypes) => {
    return (
        <View style={{ height: 50 }}>
            <TextInput
                ref={props.refTextInput}
                editable={props.editable}
                value={props.value}
                onChangeText={props.onChangeText}
                onSubmitEditing={props.onSubmitEditing}
                placeholder="Todo"
                underlineColorAndroid="blue"
                autoFocus
            />
        </View>
    );
};

export default TextInputTodo;
