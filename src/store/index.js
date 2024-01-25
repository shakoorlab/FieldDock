// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import dateTimeReducer from "../slices/dateTimeSlice";
import waypointsReducer from "../slices/waypointsSlice";
import stepperReducer from "../slices/stepperSlice";
import planningReducer from "../slices/planningSlice";

const store = configureStore({
  reducer: {
    dateTime: dateTimeReducer,
    waypoints: waypointsReducer,
    stepper: stepperReducer,
    planning: planningReducer,
  },
});

export default store;
