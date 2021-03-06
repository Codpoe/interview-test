import { ADD_USER, DELETE_USER } from './action.js';

export default (state, action) => {
    switch (action.type) {
        case ADD_USER:    
            return Object.assign({}, state, {
                users: [
                    ...state.users,
                    action.user
                ]
            });
        case DELETE_USER:
            return Object.assign({}, state, {
                users: state.users.slice().filter((user) => {
                    return user.id !== action.user.id;
                })
            });
        default:
            return state;
    }
}