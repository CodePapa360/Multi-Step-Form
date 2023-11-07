import { useSelector } from "react-redux";
import { getCurrentStep } from "../features/formSlice";
import styled from "styled-components";

const StyledSidebar = styled.ul`
  background-image: url("./images/bg-sidebar-mobile.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  gap: 1rem;
  /* width: 100%; */
`;

const StepInfo = styled.span`
  display: none;
`;

const StepNum = styled.span`
  height: 2.5rem;
  width: 2.5rem;
  margin-top: 2rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--light-blue);
  color: var(--white);

  font-weight: 500;

  &.active {
    background-color: var(--light-blue);
    color: var(--marine-blue);
  }
`;

function Sidebar() {
  const step = useSelector(getCurrentStep);

  return (
    <StyledSidebar>
      <span>
        <StepNum className={step === 1 && "active"}>1</StepNum>
        <StepInfo>
          <p>Step 1</p>
          <p>Your info</p>
        </StepInfo>
      </span>

      <span>
        <StepNum className={step === 2 && "active"}>2</StepNum>
        <StepInfo>
          <p>Step 2</p>
          <p>Select plan</p>
        </StepInfo>
      </span>

      <span>
        <StepNum className={step === 3 && "active"}>3</StepNum>
        <StepInfo>
          <p>Step 3</p>
          <p>Add-ons</p>
        </StepInfo>
      </span>

      <span>
        <StepNum className={(step === 4 || step === 5) && "active"}>4</StepNum>
        <StepInfo>
          <p>Step 4</p>
          <p>Summary</p>
        </StepInfo>
      </span>
    </StyledSidebar>
  );
}

export default Sidebar;
