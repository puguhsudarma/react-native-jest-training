const INSERT_TODO = 'INSERT_TODO';

export const actionTypes = {
    INSERT_TODO,
};

export const insertTodo = todo => ({
    type: INSERT_TODO,
    payload: {
        todo,
    },
});


