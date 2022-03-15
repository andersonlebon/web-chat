import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name: "chat",
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
        SaveUsers(state, action) {
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

export const { setUser, setUsers, setMessages, setLoading, setError, clearError } = chatSlice.actions;

export default chatSlice.reducer;