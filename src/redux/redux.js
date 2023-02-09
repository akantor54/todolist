import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, task: "finir la todo", done: false },
    { id: 2, task: "menage", done: true },
  ],

  reducers: {
    addTask(state, action) {
      const newTask = {
        id: Date.now(),
        task: action.payload,
        done: false,
      };
      state.push(newTask);
    },
    toggleTask(state, action) {
      const task = state.find((t) => t.id === action.payload);

      task.done = !task.done;
    },
    deleteTask(state, action) {
      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
