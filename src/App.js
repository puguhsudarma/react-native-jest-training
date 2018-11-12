import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import TodoContainer from './modules/Todo/Todo.Container';

const store = createStore(reducers);

export default () => {
    return (
        <Provider>
            <TodoContainer />
        </Provider>
    );
};
