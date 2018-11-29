import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createLogicMiddleware } from 'redux-logic';
import rootReducer from '../reducers';
import logic from '../logics';

const dependencies = {
    httpClient: axios,
};

const logicMiddleware = createLogicMiddleware(logic, dependencies);

const middlewares = [
    logicMiddleware,
];

// monitor redux action
if (__DEV__) {
    middlewares.push(createLogger());
}

export default (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middlewares)),
    );
};
