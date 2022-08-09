import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk"
import RootReducer from "../Reducers/RootReducer/RootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

export const store: Store = createStore(RootReducer, applyMiddleware(thunk));

// const persistConfigs = {
//     key: "node_world",
//     storage
// }


// const persistedReducer = persistReducer(persistConfigs,RootReducer);

// export const store: Store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

// export const persistedStore = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
