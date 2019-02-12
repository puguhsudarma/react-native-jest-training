const INSERT_TODO = 'INSERT_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

export const actionTypes = {
    INSERT_TODO,
    TOGGLE_TODO,
};

export const insertTodo = (text: string = '') => ({
    type: INSERT_TODO,
    payload: {
        text,
    },
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: {
        id,
    },
});
