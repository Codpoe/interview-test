import { createStore } from 'redux';
import rootReducer from './reducer.js';
import undoable from './undoable.js';

let initialState = {
    users: [
        { id: 0, name: 'User 0', avatar: '', sex: 'Male', age: 20 },
        { id: 1, name: 'User 1', avatar: '', sex: 'Male', age: 21 },
        { id: 2, name: 'User 2', avatar: '', sex: 'Female', age: 22 },
    ]
}

export default createStore(undoable(rootReducer, initialState));

