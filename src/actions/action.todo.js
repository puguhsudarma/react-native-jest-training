const INSERT_TODO = 'INSERT_TODO';

export const actionTypes = {
    INSERT_TODO,
};

export const insertTodo = (text = '') => ({
    type: INSERT_TODO,
    payload: {
        text,
    },
});
