import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import chatReducer from './chat/chat';
import userReducer from './users/user';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";


export const rootReducer = combineReducers({
    chat: chatReducer,
    users: userReducer,
});

const store = configureStore({ reducer: rootReducer, middleware: [createStateSyncMiddleware()] });
initMessageListener(store);

export default store;