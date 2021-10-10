import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "./reducers/ToDoReducer";

export const store = configureStore({
  reducer: {
    ToDO: ToDoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch