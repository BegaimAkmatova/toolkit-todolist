
import { createSlice } from '@reduxjs/toolkit';

const initTodo = {
    todoList : []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initTodo,
    reducers: {
        todo(state, action) {
            state.todoList.push(action.payload)
            
        },
        delete(state, action) {
            state.todoList.filter(item => item.id !== action.id);
        }
    }
})

export const todoActions = todoSlice.actions;

export default todoSlice;