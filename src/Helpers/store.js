import {legacy_createStore as createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import {createLogger} from "redux-logger";
import rootReducer from "../Reducers/rootReducer";

const loggerMiddleware = createLogger();
const initialState = {}


const store = createStore(rootReducer,initialState,applyMiddleware(thunkMiddleware,loggerMiddleware));

export default store;
