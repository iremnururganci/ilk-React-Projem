import { ADD_PRODUCT, GET_PRODUCTS } from "../Actions/actionTypes";

const initialState=[];

function productReducer(state=initialState,action){

    const{type,payload}=action
    switch (type) {
        case GET_PRODUCTS:
           return payload.data
           case ADD_PRODUCT:
            return [...state, payload];
        default:
            return state
    }
}
export default productReducer;