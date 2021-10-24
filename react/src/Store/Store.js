import { combineReducers, createStore } from "redux";
import { LoginReducer } from "../Reducers/LoginReducer";
import { MsgReducer } from "../Reducers/MsgReducer";

const reducers = combineReducers({
    msg: MsgReducer, 
    login: LoginReducer,
});

const Store = createStore(reducers);

export default Store;