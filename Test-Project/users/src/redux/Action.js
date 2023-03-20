import * as types from "./ActionType";
// to fatch user information
export const loadUserStart = () => ({
    type: types.LOAD_USER_START,
});
export const loadUserSuccess = (users) => ({
    type: types.LOAD_USER_SUCCESS,
    payload: users,
});
export const loadUserError = (error) => ({
    type: types.LOAD_USER_ERROR,
    payload: error,
});
//to create/post/ user information
export const CreateUserStart = (user) => ({
    type: types.CREAT_USER_START,
    payload: user,
});
export const CreateUserSuccess = () => ({
    type: types.CREAT_USER_SUCCESS,
});
export const CreateUserError = (error) => ({
    type: types.CREAT_USER_ERROR,
    payload: error,
});

// TO DELETE USER INFORMATION
export const DeleteUserStart = (id) => ({
    type: types.DELETE_USER_START,
    payload: id,
});
export const DeleteUserSuccess = (id) => ({
    type: types.DELETE_USER_SUCCESS,
    payload: id,
});
export const DeleteUserError = (error) => ({
    type: types.DELETE_USER_ERROR,
    payload: error,
});
//TO UPDATE USER INFORMATION
export const UpdateUserStart = (userinfo) => ({
    type: types.UPDATE_USER_START,
    payload: userinfo,
});
export const UpdateUserSuccess = () => ({
    type: types.UPDATE_USER_SUCCESS,
});
export const UpdateUserError = (error) => ({
    type: types.UPDATE_USER_ERROR,
    payload: error,
});