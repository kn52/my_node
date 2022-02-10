import { combineReducers } from "redux";
import { LoginReducer } from "../Reducer/LoginReducer";
import { MsgReducer } from "../Reducer/MsgReducer";


const RootReducer = combineReducers({
    login: LoginReducer,
    msg: MsgReducer
});

export default RootReducer;

