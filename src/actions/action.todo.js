const GET_TODO = 'GET_TODO';
const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';

const INSERT_TODO = 'INSERT_TODO';
const INSERT_TODO_SUCCESS = 'INSERT_TODO_SUCCESS';

const TODO_FAILED = 'TODO_FAILED';

export const actionTypes = {
    GET_TODO,
    GET_TODO_SUCCESS,

    INSERT_TODO,
    INSERT_TODO_SUCCESS,

    TODO_FAILED,
};

export const getTodo = (callback) => ({
    type: GET_TODO,
    payload: {
        callback,
    },
});

export const getTodoSuccess = (todos = []) => ({
    type: GET_TODO_SUCCESS,
    payload: {
        todos,
    },
});

export const insertTodo = (todo = '', cbSuccess, cbError) => ({
    type: INSERT_TODO,
    payload: {
        todo,
        cbSuccess,
        cbError,
    },
});

export const insertTodoSuccess = (todo) => ({
    type: INSERT_TODO_SUCCESS,
    payload: {
        todo,
    },
});

export const todoFailed = (err, type) => ({
    type: TODO_FAILED,
    payload: {
        err,
        type,
    },
});
