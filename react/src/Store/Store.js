import { combineReducers, createStore } from "redux";
import { LoginReducer } from "../Redux/Reducers/Reducer/LoginReducer";
import { MsgReducer } from "../Redux/Reducers/Reducer/MsgReducer";

const reducers = combineReducers({
    msg: MsgReducer, 
    login: LoginReducer,
});

const Store = createStore(reducers);

export default Store;