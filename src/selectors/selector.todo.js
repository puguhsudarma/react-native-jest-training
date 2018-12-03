export const selectCompleteTodo = (state) => {
    const { todos } = state.todo;
    return todos.filter(({ isComplete }) => isComplete);
};

export const selectInCompleteTodo = (state) => {
    const { todos } = state.todo;
    return todos.filter(({ isComplete }) => !isComplete);
};
