import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  name: "",
  email: "",
  phone: "",
  duration: "monthly",
  plan: { planName: "advance", charge: 12 },
  extentions: [
    { extName: "online-service", charge: 2 },
    { extName: "large-storage", charge: 2 },
  ],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextStep: (state, action) => {
      state.step = state.step + 1;
    },
    prevStep: (state, action) => {
      state.step = state.step - 1;
    },
  },
});

export const { nextStep, prevStep } = formSlice.actions;
export default formSlice.reducer;

export function getCurrentStep(state) {
  return state.form.step;
}
