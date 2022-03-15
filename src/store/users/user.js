import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";


const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        user: {
            id: null,
            name: null,
            avatar: null,
        },
        isLoading: false,
        error: null,
    },

    reducers: {
        setUser(state, action) {
            const user = state.find(user => user.name === action.payload.name);  
            if (user) {
                state.user = user;
            }  else{
                state.error = "User not found";
            }
        },
        saveUser(state, action) {
            const user = state.find(user => user.name === action.payload.name);
            if (!user) {
                state.users.push({...action.payload, id: uuid()});
            } else {
                state.error = "User already exists";
            }

        },
        setUsers(state, action) {
            state.users = action.payload;
        },
        removeUser(state, action) {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        clearError(state) {
            state.error = null;
        },
    },
});

export const { setUser, saveUser, setMessages, setLoading, setError, clearError } = userSlice.actions;

export default userSlice.reducer;