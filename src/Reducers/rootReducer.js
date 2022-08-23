//Redusersları biraraya getir

import { combineReducers } from "redux";
import authReducer from "./authReducer";

import productReducer from "./productReducer";
import categorieReducer from "./categorieReducer";
import SubCategorieReducer from "./SubCategorieReducer"

let rootReducer = combineReducers({
    authReducer,
    productReducer,
    categorieReducer,
    SubCategorieReducer
})

export default rootReducer;