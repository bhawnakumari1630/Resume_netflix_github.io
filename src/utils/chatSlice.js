import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name : "chatSlice",
    initialState : {
        msg: 'radhe radhe shyama!',
        messages : []
    }, 
    reducers : {
        addMessage : (state, action) => {
            state.messages.splice(LIVE_CHAT_COUNT, 1)   // restrict the length to 40 as one more message is added it will remove one message from top of "messages"
            state.messages.unshift(action.payload)
        }
    }
})

export const {addMessage} = chatSlice.actions
export default chatSlice.reducer