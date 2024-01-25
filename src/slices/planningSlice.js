// src/slices/planningSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const planningSlice = createSlice({
  name: "planning",
  initialState: {
    completed: false,
  },
  reducers: {
    setPlanningCompleted: (state, action) => {
      state.completed = action.payload;
    },
  },
});

export const { setPlanningCompleted } = planningSlice.actions;
export default planningSlice.reducer;
