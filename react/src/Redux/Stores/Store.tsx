import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk"
import RootReducer from "../Reducers/RootReducer/RootReducer";

const store: Store = createStore(RootReducer, applyMiddleware(thunk));

export default store;


