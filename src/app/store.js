import { configureStore } from "@reduxjs/toolkit";
import todoAppReducer from "../features/todo-app/todoAppSlice";

export default configureStore({
    reducer: {
        todoApp: todoAppReducer
    }
})