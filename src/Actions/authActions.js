
//Actionların ne yaptığına karar verdiğimiz yer.
//Bu actionlar reduserda çalışacak

import authService from "../Services/authService";
import * as actionTypes from "./actionTypes"

const loginSuccess = user => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        user
    }
}
const loginError = error => {
    return {
        type:actionTypes.LOGIN_ERROR,
        error
    }
}

export const login = (email,password) => (dispatch) =>{
    return authService.login(email,password)
        .then(data=>{
            data.message
            ?dispatch(loginError(data.message))
            :(dispatch(loginSuccess(data)))
        })
        .catch(err=>dispatch(loginError(err)));
    
}
export const logout = ()  => {
    authService.logout();
    return {
        type : actionTypes.LOGOUT
    };
}