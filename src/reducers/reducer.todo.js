import { actionTypes as type } from '../actions/action.todo';

export const initialState = {
    todos: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case type.GET_TODO_SUCCESS:
            return {
                ...state,
                todos: action.payload.todos,
            };

        case type.INSERT_TODO_SUCCESS:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload.todo,
                ],
            };

        default:
            return state;
    }
};
