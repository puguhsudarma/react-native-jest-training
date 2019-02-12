import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Todo from "./Todo";
import { insertTodo, toggleTodo } from "../../actions/action.todo";
import {
  selectCompleteTodo,
  selectInCompleteTodo
} from "../../selectors/selector.todo";

const mapStateToProps = state => ({
  todoComplete: selectCompleteTodo(state),
  todoIncomplete: selectInCompleteTodo(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      insertTodo,
      toggleTodo,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
