import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Todo from './Todo';
import { insertTodo, getTodo } from '../../actions/action.todo';

const mapStateToProps = state => ({
    todos: state.todo.todos,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getTodo,
        insertTodo,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
