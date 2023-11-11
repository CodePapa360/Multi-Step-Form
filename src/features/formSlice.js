import { createSlice } from "@reduxjs/toolkit";

export const allPlans = [
  { name: "Arcade", costs: { monthly: 9, yearly: 90 } },
  { name: "Advanced", costs: { monthly: 12, yearly: 120 } },
  { name: "Pro", costs: { monthly: 15, yearly: 150 } },
];

export const allAddons = [
  {
    id: 45325,
    name: "Online Service",
    description: "Access to multiplayer games",
    costs: { monthly: 1, yearly: 10 },
    // isAdded: true,
  },
  {
    id: 25233,
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    costs: { monthly: 2, yearly: 20 },
    // isAdded: true,
  },
  {
    id: 25325,
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    costs: { monthly: 2, yearly: 20 },
    // isAdded: false,
  },
];

const initialState = {
  step: 3,
  name: "",
  email: "",
  phone: "",
  isYearly: false,
  plan: "Advanced",
  addOns: [45325, 25325],
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
    addPlanData: (state) => {
      state.step = state.step + 1;
    },
    addAddonsData: (state) => {
      state.step = state.step + 1;
    },
    finishStep: (state) => {
      state.step = state.step + 1;
    },
    toggleDuration: (state) => {
      state.isYearly = !state.isYearly;
    },
    updatePlan: (state, action) => {
      state.plan = action.payload;
    },
    addRemoveAddon: (state, action) => {
      const isAdded = state.addOns.includes(action.payload);
      if (!isAdded) state.addOns.push(action.payload);
      else
        state.addOns = state.addOns.filter((addon) => addon !== action.payload);
    },
    nextStep: (state) => {
      state.step = state.step + 1;
    },
    prevStep: (state) => {
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
  updatePlan,
  addRemoveAddon,
  nextStep,
  prevStep,
} = formSlice.actions;
export default formSlice.reducer;

export function getCurrentStep(state) {
  return state.form.step;
}
