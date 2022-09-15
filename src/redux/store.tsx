import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from 'redux-thunk';




export const store = createStore(rootReducer,applyMiddleware(thunk))


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;