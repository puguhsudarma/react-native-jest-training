import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Todo from './Todo';
import { insertTodo } from '../../actions/action.todo';
import { selectCompleteTodo, selectInCompleteTodo } from '../../selectors/selector.todo';

const mapStateToProps = state => ({
    todos: state.todo.todos,
    todoComplete: selectCompleteTodo(state),
    todoIncomplete: selectInCompleteTodo(state),
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        insertTodo,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
