import { actionTypes as type } from '../actions/action.todo';

export const initialState = {
    todos: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case type.INSERT_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload.text,
                ],
            };

        default:
            return state;
    }
};
