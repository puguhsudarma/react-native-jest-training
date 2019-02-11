import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

const middlewares = [];

// monitor redux action
if (__DEV__) {
  middlewares.push(createLogger());
}

export default initialState => {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
};
