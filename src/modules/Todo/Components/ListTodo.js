// @flow

import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { styles as s } from 'react-native-style-tachyons';

type ListTodoPropTypes = {
    todos: string[],
};

const ListTodo = (props: ListTodoPropTypes) => {
    return (
        <View style={[s.aifs, s.jcc, { marginTop: 30 }]}>
            <Text style={{
                fontSize: 20,
                fontWeight: '600',
                textAlign: 'center',
                textDecorationLine: 'underline',
                color: '#000',
            }}>
                {'TODO TODAY: '}
            </Text>
            {
                props.todos.map((todo) => {
                    return (
                        <Text key={todo} style={{
                            fontSize: 18,
                            fontWeight: '700',
                            color: '#000',
                        }}>
                            {`- ${todo}`}
                        </Text>
                    );
                })
            }
        </View>
    );
};

export default ListTodo;
