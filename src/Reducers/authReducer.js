//Reducerin içinde apiye bağlan
//Bütün reducerlar çağırdığın aksiyonu içerip içermediğine bakıcak
import * as actionTypes from '../Actions/actionTypes'
const  initState = {
    user:{email: "",id: 0,name:""},
    isAuthenticated:false,
    error:false,
    errorMessage:'',
}
const authReducer = (state=initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            
            return {
                ...state,
                user:action.user,
                isAuthenticated:true,
                error:false,
                errorMessage:''
            };
            
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                user:'',
                error:true,
                isAuthenticated:false,
                errorMessage:action.error
            }

        case actionTypes.LOGOUT:
            return {
                user:''
            }

        default:
            return state;
    }
}

export default authReducer;
