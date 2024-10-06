import { chatInterface } from "@/types/component";
import { createSlice } from "@reduxjs/toolkit";

interface stateInterface {
  history: chatInterface[];
  isLoading: boolean;
}
const initialState: stateInterface = {
  history: [],
  isLoading: false,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateChatHistory(state = initialState, action) {
      state.history.push(action.payload);
    },
    mutateChatLoadingState(state = initialState, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { updateChatHistory, mutateChatLoadingState } = chatSlice.actions;
export default chatSlice.reducer;
