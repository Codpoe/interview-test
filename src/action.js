export const ADD_USER = 'add_user';
export const DELETE_USER = 'delete_user';

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