import { UNDO, REDO } from './action.js';

export default (reducer, state) => {
    let wrappedState;

    if (!state.past || !state.future) {
        wrappedState = {
            past: [],
            present: state,
            future: []
        };
    } else {
        wrappedState = state;
    }

    return (state = wrappedState, action) => {
        const { past, present, future } = state;
        switch (action.type) {
            case UNDO:
                const previous = past[past.length - 1];
                const newPast = past.slice(0, past.length - 1);
                return {
                    past: newPast,
                    present: previous,
                    future: [present, ...future]
                };
            case REDO:
                const next = future[0];
                const newFuture = future.slice(1);
                return {
                    past: [...past, present],
                    present: next,
                    future: newFuture
                };
            default:
                const newPresent = reducer(present, action);
                if (newPresent === present) {
                    return state;
                }
                return {
                    past: [...past, present],
                    present: newPresent,
                    future: []
                };
        }
    }
}