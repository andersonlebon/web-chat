import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
        isLoading: false,
        error: null,
    },

    reducers: {
        setMessages(state, action) {
            state.messages.push(action.payload);
        },

        SaveMessage(state, action) {
            const currentM = state.messages.find(message => message.id !== action.payload.id);
            if (currentM) {
                currentM.texts.push(action.payload.text);
            }
            else {
                state.messages.push(action.payload);
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

export const { setMessages, SaveMessage, setLoading, setError, clearError } = chatSlice.actions;

export default chatSlice.reducer;