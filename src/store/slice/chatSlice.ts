import { chatInterface } from "@/types/component";
import { createSlice } from "@reduxjs/toolkit";

interface stateInterface {
  history: chatInterface[];
}
const initialState: stateInterface = {
  history: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateChatHistory(state = initialState, action) {
      state.history.push(action.payload);
    },
  },
});

export const { updateChatHistory } = chatSlice.actions;
export default chatSlice.reducer;
