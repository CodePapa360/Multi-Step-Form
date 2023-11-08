import { getCurrentStep } from "../features/formSlice";
import Step1 from "../pages/Step1";
import Step2 from "../pages/Step2";
import Step3 from "../pages/Step3";
import Step4 from "../pages/Step4";

import { useSelector } from "react-redux";
import FormActions from "./FormActions";
import styled from "styled-components";
import ThankYou from "../features/ThankYou";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormInfo = styled.div`
  background-color: var(--white);
  padding: 1.5rem;
  width: calc(100% - 2rem);
  margin-inline: auto;
  border-radius: 10px;
  margin-top: -5rem;
  margin-bottom: 1.5rem;
  color: var(--marine-blue);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
`;

function AppLayout() {
  const step = useSelector(getCurrentStep);

  return (
    <StyledForm>
      <FormInfo>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <ThankYou />}
      </FormInfo>
      {step < 5 && <FormActions />}
    </StyledForm>
  );
}

export default AppLayout;
