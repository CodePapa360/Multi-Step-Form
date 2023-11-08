import { getCurrentStep } from "../features/formSlice";
import Step1 from "../pages/Step1";
import Step2 from "../pages/Step2";
import Step3 from "../pages/Step3";
import Step4 from "../pages/Step4";

import { useSelector } from "react-redux";
import FormActions from "./FormActions";
import styled from "styled-components";
import ThankYou from "../features/ThankYou";
import { useState } from "react";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function AppLayout() {
  const step = useSelector(getCurrentStep);

  return (
    <StyledForm>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <ThankYou />}
    </StyledForm>
  );
}

export default AppLayout;
