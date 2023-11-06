import { getCurrentStep } from "../features/formSlice";
import Step1 from "../pages/Step1";
import Step2 from "../pages/Step2";
import Step3 from "../pages/Step3";
import Step4 from "../pages/Step4";

import { useSelector } from "react-redux";

function AppLayout() {
  const step = useSelector(getCurrentStep);

  if (step === 1) return <Step1 />;
  if (step === 2) return <Step2 />;
  if (step === 3) return <Step3 />;
  if (step === 4) return <Step4 />;
}

export default AppLayout;
