import { createSlice } from "@reduxjs/toolkit";

export const plans = {
  arcade: { monthly: 9, yearly: 90 },
  advanced: { monthly: 12, yearly: 120 },
  pro: { monthly: 15, yearly: 150 },
};

const addOns = [
  {
    id: 1,
    name: "Online Service",
    description: "Access to multiplayer games",
    costs: { monthly: 1, yearly: 10 },
    isAdded: false,
  },
  {
    id: 2,
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    costs: { monthly: 1, yearly: 10 },
    isAdded: true,
  },
  {
    id: 3,
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    costs: { monthly: 1, yearly: 10 },
    isAdded: false,
  },
];

const initialState = {
  step: 2,
  name: "",
  email: "",
  phone: "",
  isYearly: false,
  plan: {
    name: Object.keys(plans)[0],
    charge: Object.values(plans)[0]["monthly"],
  },
  addOns,
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
      const duration = state.isYearly ? "yearly" : "monthly";
      state.plan.charge = plans[state.plan.name][duration];
    },
    updatePlan: (state, action) => {
      state.plan.name = action.payload;
      const duration = state.isYearly ? "yearly" : "monthly";
      state.plan.charge = plans[action.payload][duration];
    },
    nextStep: (state, action) => {
      state.step = state.step + 1;
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
  updatePlan,
  nextStep,
  prevStep,
} = formSlice.actions;
export default formSlice.reducer;

export function getCurrentStep(state) {
  return state.form.step;
}
