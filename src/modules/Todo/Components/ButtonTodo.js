// @flow

import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import { styles as s } from 'react-native-style-tachyons';

type ButtonTodoPropTypes = {
    action: () => void,
    disabled: boolean,
};

const ButtonTodo = (props: ButtonTodoPropTypes) => {
    return (
        <View>
            <TouchableHighlight onPress={props.action} disabled={props.disabled}>
                <View style={[s.aic, s.jcc, {
                    padding: 10,
                    backgroundColor: 'blue',
                }]}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '600',
                    }}>
                        {'Simpan'}
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

export default ButtonTodo;
