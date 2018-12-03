import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configs/config.store';
import TodoContainer from './modules/Todo/Todo.Container';

const store = configureStore();

export default () => {
    return (
        <Provider store={store}>
            <TodoContainer />
        </Provider>
    );
};
