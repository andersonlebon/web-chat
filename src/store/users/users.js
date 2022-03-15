import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        messages: [],
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
            state.user = action.payload;    
        },
        saveUser(state, action) {
            state.users.push(action.payload);
        },
        SaveMessages(state, action) {
            state.messages.push(action.payload);
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