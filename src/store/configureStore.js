import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import chatReducer from './chat/chat';


const rootReducer = combineReducers({
    chatReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;