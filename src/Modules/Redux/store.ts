import { configureStore } from "@reduxjs/toolkit";
import Modal from "./actions/modal";

const store = configureStore({
  reducer: {
    modal: Modal,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
