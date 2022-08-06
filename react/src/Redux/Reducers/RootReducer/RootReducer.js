import { combineReducers } from "redux";
import { ArticleReducer } from "../Reducer/Article/ArticleReducer";
import { CounterReducer } from "../Reducer/Counter/CounterReducer";
import { LoginReducer } from "../Reducer/LoginReducer";
import { MsgReducer } from "../Reducer/MsgReducer";

const RootReducer = combineReducers({
    login: LoginReducer,
    msg: MsgReducer,
    article: ArticleReducer,
    count: CounterReducer
});

export default RootReducer;

