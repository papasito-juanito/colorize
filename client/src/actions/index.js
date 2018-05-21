import * as types from './Types';


//액션을 생성하는 함수
export const setItem = (color) => ({
    type: types.SET_ITEM,
    color
});

//auth
export const signinUser = (form) => ({
    type: types.LOGIN_USER, 
    form
});
export const confirmUser = (form) => ({
    type: types.CONFIRM_USER, 
    form
});
export const signinSuccess = () => ({
    type: types.LOGIN_SUCCESS
});
export const signoutUser = () => ({
    type: types.LOGOUT_USER,
});
export const signoutSuccess = () => ({
    type: types.LOGNOUT_SUCCESS
});
export const setError = (message) => ({
    type: types.SET_ERROR, 
    message
});
