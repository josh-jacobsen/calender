import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
      { id: 1, description: "First thing", state: "InProgress" },
      { id: 2, description: "Second thing", state: "Completed" },
  ],
  
  reducers: {
    addTodo: (state, action) => {
      let dueDate = action.payload.startDate.toDateString();
      let description = action.payload.todoDescription;
      let newToDo = { id: 3, description: "New thing added", state: "Completed" }
      let addTodo = state.filter(t => t.id === newToDo.id)
      if (addTodo.length === 0) {
          state.push(newToDo)
      }
    },
  },
});

export const { addTodo } = todoSlice.actions;

export const selectTodos = state => state.todos;

export default todoSlice.reducer;
