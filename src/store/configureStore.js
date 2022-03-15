import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import chatReducer from './chat/chat';
import userReducer from './users/user';


const rootReducer = combineReducers({
    chat: chatReducer,
    users: userReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;