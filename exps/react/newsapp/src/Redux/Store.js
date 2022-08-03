import { combineReducers, createStore } from "redux";
import { CategoryReducer } from "./CategoryReducer";

const reducers = combineReducers({
   cat: CategoryReducer
});

const Store = createStore(reducers);

export default Store;