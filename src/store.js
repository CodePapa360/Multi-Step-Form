import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
