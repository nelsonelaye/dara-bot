import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./slice/chatSlice";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { userSlice } from "./slice/userSlice";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = combineReducers({
//   chat: chatSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

// export const persistor = persistStore(store);

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
