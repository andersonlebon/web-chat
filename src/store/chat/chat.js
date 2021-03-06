import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: [],
        isLoading: false,
        error: null,
    },

    reducers: {
        setMessages(state, action) {
            state.chats = action.payload;
        },

        saveMessage(state, action) {
            const currentM = state.chats.find(chat => chat.id === action.payload.id);
            if (currentM) {
                currentM.messages.push(action.payload);
            }
            else {
                state.chats.push({
                 id : action.payload.id,
                 messages: [action.payload],
                 sender : action.payload.sender || "",
                 receiver : action.payload.receiver || null,
                 createdAt : action.payload.time + " " + action.payload.date,
    
         });
        }
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


export const { setMessages, saveMessage, setLoading, setError, clearError } = chatSlice.actions;
export default chatSlice.reducer;