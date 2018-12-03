import { actionTypes as type } from '../actions/action.todo';

const dummy = [
    {
        todo: 'Build PPT',
        isComplete: true,
    },
    {
        todo: 'Build APK',
        isComplete: true,
    },
    {
        todo: 'Deploy APK',
        isComplete: true,
    },
    {
        todo: 'Testing APK',
        isComplete: false,
    },
];

export const initialState = {
    todos: [
        ...dummy,
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case type.INSERT_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        todo: action.payload.todo,
                        isComplete: false,
                    }
                ],
            };

        default:
            return state;
    }
};
