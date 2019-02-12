// @flow

import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import { UniButton } from '../../_global'

const TitleTodo = (props: { isComplete: boolean, title: string }) => {
    return (
        <View style={{
            marginTop: 20,
            paddingVertical: 10,
            backgroundColor: props.isComplete ? 'green' : 'red',
        }}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "600",
                    textAlign: "center",
                    textDecorationLine: "underline",
                }}
            >
                {props.title.toUpperCase()}
            </Text>
        </View>
    );
}

const ItemTodo = (props: {
    todo: Array<{
        id: number,
        todo: string,
        isComplete: boolean,
    }>,
    toggleTodo: (id: number) => void,
}) => {
    return props.todo.map((todo, index) => {
        return (
            <View key={todo.id}>
                <UniButton action={() => props.toggleTodo(todo.id)}>
                    <View style={{
                        paddingVertical: 10,
                        paddingHorizontal: 5,
                        backgroundColor: index % 2 === 1 ? '#f5f5f5' : '#ccc',
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: "700", color: "#000" }}>
                            {`${todo.id}. ${todo.todo}`}
                        </Text>
                    </View>
                </UniButton>
            </View>
        );
    });
};

type ListTodoPropTypes = {
    todoComplete: Array<{
        id: number,
        todo: string,
        isComplete: boolean
    }>,
    todoInComplete: Array<{
        id: number,
        todo: string,
        isComplete: boolean
    }>,
    toggleTodo: (id: number) => void,
};

const ListTodo = (props: ListTodoPropTypes) => {
    return (
        <ScrollView contentContainerStyle={[s.aifs, s.jcc, { marginTop: 30 }]}>
            <TitleTodo title="TODO TODAY COMPLETE" isComplete />
            <ItemTodo
                todo={props.todoComplete}
                toggleTodo={props.toggleTodo}
            />

            <View style={{ height: 25 }} />

            <TitleTodo title="TODO TODAY INCOMPLETE" />
            <ItemTodo
                todo={props.todoInComplete}
                toggleTodo={props.toggleTodo}
            />
        </ScrollView>
    );
};

export default ListTodo;
