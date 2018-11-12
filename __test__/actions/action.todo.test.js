import {
    actionTypes as type,
    insertTodo,
} from '../../src/actions/action.todo';

describe('Test todo action creators', () => {
    it('Insert todo blank', () => {
        expect(insertTodo())
            .toEqual({
                type: type.INSERT_TODO,
                payload: {
                    text: undefined,
                },
            });
    });

    it('Insert todo with text', () => {
        expect(insertTodo('sometext'))
            .toEqual({
                type: type.INSERT_TODO,
                payload: {
                    text: 'sometext',
                },
            });
    });
});