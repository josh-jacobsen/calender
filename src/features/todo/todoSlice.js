import { createSlice } from '@reduxjs/toolkit';

var createUniqueId = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  
  reducers: {
    addTodo: (state, action) => {
      let dueDate = action.payload.startDate.toDateString();
      let description = action.payload.todoDescription;
      state.push({id: createUniqueId(), description: description, state: "InProgress", dueDate: dueDate})
    },
  },
});

export const { addTodo } = todoSlice.actions;

export const selectTodos = state => state.todos;

export default todoSlice.reducer;
