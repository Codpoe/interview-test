import { createStore } from 'redux';
import rootReducer from './reducer.js';

let initialState = {
    users: [
        { name: 'User 1', avatar: '', sex: 'Male', age: 20 },
        { name: 'User 2', avatar: '', sex: 'Male', age: 21 },
        { name: 'User 3', avatar: '', sex: 'Female', age: 22 },
    ]
}

export default createStore(rootReducer, initialState);

