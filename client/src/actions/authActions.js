import { REGISTER_SUCCESS, LOGIN_SUCCESS, REDIRECTED, AJAX_ERROR } from './actionTypes';
import { register, login } from '../api/remote';

function registerSuccess(data){
    return {
        type: REGISTER_SUCCESS,
        data
    }
}

function loginSuccess(data){
    return {
        type: LOGIN_SUCCESS,
        data
    }
}

function redirect (){
    return {
        type: REDIRECTED,
    }
}

function registerAction(username,password){
    return async (dispatch) => {
        try{
            const data = await register(username,password)
            dispatch(registerSuccess(data))
        }catch(error){
            dispatch({
                type:AJAX_ERROR,
                error
            })
        }
    }
}

function loginAction(username,password){
    return async (dispatch) => {
        try{
            const data = await login(username,password)
            let token = Math.random()
            localStorage.setItem('authToken', token)
            dispatch(loginSuccess(data))
        }catch(error){
            dispatch(error)({
                type: AJAX_ERROR,
                error
            })
        }
    }
}

function logoutAction() {
    return (dispatch) => {
        localStorage.clear();
    };
}

export { registerAction, loginAction, logoutAction, redirect }