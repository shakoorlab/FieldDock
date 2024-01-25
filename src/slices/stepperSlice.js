// src/slices/stepperSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const stepperSlice = createSlice({
  name: "stepper",
  initialState: {
    activeStep: 0,
  },
  reducers: {
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
  },
});

export const { setActiveStep } = stepperSlice.actions;
export default stepperSlice.reducer;
