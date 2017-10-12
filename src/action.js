export const ADD_USER = 'add_user';
export const DELETE_USER = 'delete_user';
export const UNDO = 'undo';
export const REDO = 'redo';

export const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
}

export const deleteUser = (user) => {
    return {
        type: DELETE_USER,
        user
    }
}

export const undo = () => ({ type: UNDO });

export const redo = () => ({ type: REDO });