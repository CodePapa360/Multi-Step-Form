import { useDispatch, useSelector } from "react-redux";
import { getCurrentStep, nextStep, prevStep } from "../features/formSlice";
import styled from "styled-components";
import Button from "./Button";

const StyledFormActions = styled.div`
  display: flex;
  align-items: center;

  background-color: var(--white);
  padding: 1rem;
`;

function FormActions() {
  const dispatch = useDispatch();
  const step = useSelector(getCurrentStep);

  function handleNext(e) {
    e.preventDefault();
    dispatch(nextStep());
  }

  function handlePrev(e) {
    e.preventDefault();
    dispatch(prevStep());
  }

  return (
    <StyledFormActions>
      {step > 1 && (
        <Button onClick={handlePrev} positon="left">
          Go back
        </Button>
      )}
      {step < 5 && (
        <Button onClick={handleNext} positon="right">
          Next step
        </Button>
      )}
    </StyledFormActions>
  );
}

export default FormActions;
