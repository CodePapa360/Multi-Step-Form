import { getCurrentStep } from "../features/formSlice";
import Step1 from "../pages/Step1";
import Step2 from "../pages/Step2";
import Step3 from "../pages/Step3";
import Step4 from "../pages/Step4";

import { useSelector } from "react-redux";
import ThankYou from "../features/ThankYou";

function AppLayout() {
  const step = useSelector(getCurrentStep);

  return (
    <>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <ThankYou />}
    </>
  );
}

export default AppLayout;
