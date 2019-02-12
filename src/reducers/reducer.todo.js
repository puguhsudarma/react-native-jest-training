import { actionTypes as type } from "../actions/action.todo";

export const initialState = {
    counter: 1,
    todos: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case type.INSERT_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.counter,
                        todo: action.payload.text,
                        isComplete: false
                    },
                ],
                counter: state.counter + 1,
            };

        case type.TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            isComplete: !todo.isComplete,
                        };
                    }

                    return todo;
                }),
            };

        default:
            return state;
    }
};
