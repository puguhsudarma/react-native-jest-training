import { Provider } from 'react-redux';
import { store } from './configs';
import TodoContainer from './modules/Todo/Todo.Container';

const store = store();

export default () => {
    return (
        <Provider store={store}>
            <TodoContainer />
        </Provider>
    );
};
