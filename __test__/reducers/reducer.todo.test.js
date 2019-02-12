import { actionTypes as type } from '../../src/actions/action.todo';
import todo, { initialState } from '../../src/reducers/reducer.todo';

describe('Test todo reducer', () => {
    it('No type action match, return default state', () => {
        expect(todo(undefined, {
            type: 'SOME_ANOTHER_ACTION',
        }))
            .toEqual(initialState);
    });

    it('Insert todo, return new state todo', () => {
        expect(todo(undefined, {
            type: type.INSERT_TODO,
            payload: {
                text: 'Some Text',
            },
        }))
            .toEqual({
                ...initialState,
                counter: 2,
                todos: [
                    ...initialState.todos,
                    {
                        id: 1,
                        todo: 'Some Text',
                        isComplete: false,
                    },
                ],
            });
    });
});