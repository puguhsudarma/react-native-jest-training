import { createLogic } from 'redux-logic';
import { isEmpty } from 'lodash';
import { actionTypes as type, getTodoSuccess, todoFailed } from '../actions/action.todo';
import { toast } from '../utils';
import { api } from '../constants';

const insertTodoLogic = createLogic({
    type: type.INSERT_TODO,
    validate({ action }, allow, reject) {
        if (!isEmpty(action.payload.todo)) {
            allow(action);
        } else {
            toast('Todo tidak boleh kosong');
            reject();
        }
    },
    process({ httpClient, action }, dispatch, done) {
        httpClient.post(api.insertTodo, action.payload)
            .then((response) => {
                dispatch(insertTodoSuccess(action.payload.todo));
            })
            .catch((err) => {
                toast('Terjadi kesalahan saat insert todo');
                dispatch(todoFailed(err, type.INSERT_TODO));
            })
            .then(() => done());
    },
});

const getTodoLogic = createLogic({
    type: type.GET_TODO,
    latest: true,
    process({ httpClient }, dispatch, done) {
        httpClient.get(api.getTodo)
            .then((response) => {
                dispatch(getTodoSuccess(response.data.data.todo));
            })
            .catch((err) => {
                toast('Terjadi kesalahan saat get todo');
                dispatch(todoFailed(err, type.GET_TODO));
            })
            .then(() => done());
    },
});

export default [
    insertTodoLogic,
    getTodoLogic,
];
