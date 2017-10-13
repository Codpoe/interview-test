import { createStore, compose } from 'redux';
import rootReducer from './reducer.js';
import undoable from './undoable.js';

let store;
let initialState = {
    users: [
        { id: 0, name: 'User 0', avatar: '', sex: 'Male', age: 20 },
        { id: 1, name: 'User 1', avatar: '', sex: 'Male', age: 21 },
        { id: 2, name: 'User 2', avatar: '', sex: 'Female', age: 22 },
    ]
}
const persistedState = JSON.parse(localStorage.getItem('state'));

if (persistedState) {
    store = createStore(undoable(rootReducer, persistedState));
} else {
    store = createStore(undoable(rootReducer, initialState));
}

store.subscribe(() => {
    console.log(store.getState());
    localStorage.setItem('state', JSON.stringify(store.getState()));
});

export default store;