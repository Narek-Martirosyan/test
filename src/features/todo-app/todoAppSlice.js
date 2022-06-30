import { createSlice } from "@reduxjs/toolkit";

export const todoAppSlice = createSlice({
    name: 'todoApp',
    initialState: {
            list: [
                {
                    title: 'Learn JS',
                    completed: false
                },
                {
                    title: 'Learn React JS',
                    completed: false
                },
                {
                    title: 'Learn English',
                    completed: false
                },
            ],
            num: 0,
            searchValue: ''
        },
    reducers: {
        addTodo: (state, action) => {
            state.list.unshift({title: action.payload, completed: false});
        },
        deleteTodo: (state, action) => {
            if (state.list[action.payload].completed) {
                state.num -= 1;
                state.list.splice(action.payload, 1);
            }else {
                state.list.splice(action.payload, 1);
            }
        },
        editTodo: (state, action) => {
            state.list[action.payload[0]].title = action.payload[1];
        },
        clearCompleted: (state) => {
            let i = 0;
            while(i < state.list.length) {
                if(state.list[i].completed) {
                    state.list.splice(i, 1);
                    i = 0;
                    continue;
                }
                i++
            }
            state.num = 0;
        },
        checkboxChecked: (state, action) => {
            state.list[action.payload[0]].completed = action.payload[1];
            if (state.list[action.payload[0]].completed) {
                state.num += 1;
            } else {
                state.num -= 1;
            }
        },
        changeSearchValue: (state, action) => {
            state.searchValue = action.payload
        }
    }


})

export const searchHandler = (state) => {
    if (!state.todoApp.searchValue) {
        return state.todoApp.list;
    }

    return state.todoApp.list.filter((item) => item.title.toLowerCase().search(state.todoApp.searchValue.toLowerCase()) !== -1);
}

export const { addTodo, deleteTodo, editTodo, searchTodo, clearCompleted, checkboxChecked, changeSearchValue } = todoAppSlice.actions;

export const initialTodo = (state) => state.todoApp.list;
export const numState = (state) => state.todoApp.num;
export default todoAppSlice.reducer;