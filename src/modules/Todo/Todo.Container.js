import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Todo from './Todo';
import { insertTodo } from '../../actions/action.todo';

const mapStateToProps = state => ({
    todos: state.todo.todos,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        insertTodo,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
