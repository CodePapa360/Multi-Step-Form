import { createSlice } from "@reduxjs/toolkit";

const plans = {
  advance: 12,
};

const initialState = {
  step: 2,
  name: "",
  email: "",
  phone: "",
  isYearly: true,
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
    addPersonalInfoData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.step = state.step + 1;
    },
    addPlanData: (state, action) => {
      state.step = state.step + 1;
    },
    addAddonsData: (state, action) => {
      state.step = state.step + 1;
    },
    finishStep: (state, action) => {
      state.step = state.step + 1;
    },
    toggleDuration: (state) => {
      state.isYearly = !state.isYearly;
    },
    prevStep: (state, action) => {
      state.step = state.step - 1;
    },
  },
});

export const {
  addPersonalInfoData,
  addPlanData,
  addAddonsData,
  finishStep,
  toggleDuration,
  prevStep,
} = formSlice.actions;
export default formSlice.reducer;

export function getCurrentStep(state) {
  return state.form.step;
}
