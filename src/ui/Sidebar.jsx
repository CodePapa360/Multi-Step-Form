import styled from "styled-components";
import { useSelector } from "react-redux";
import { getCurrentStep } from "../features/formSlice";
import { breakpoints } from "../styles/GlobalStyles";

const StyledSidebar = styled.ul`
  background-image: url("./images/bg-sidebar-mobile.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: column;
    background-image: url("./images/bg-sidebar-desktop.svg");
    border-radius: 10px;
    height: 100%;
    padding: 2rem;
    justify-content: flex-start;
  }
`;

const StepItemContainer = styled.li`
  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: var(--white);
    gap: 1rem;
  }
`;

const StepInfo = styled.span`
  display: none;

  > :first-child {
    opacity: 0.7;
  }

  > :last-child {
    font-weight: 800;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    display: inline-block;
  }
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

  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 0;
  }
`;

function Sidebar() {
  const step = useSelector(getCurrentStep);

  return (
    <StyledSidebar>
      <StepItemContainer>
        <StepNum className={step === 1 && "active"}>1</StepNum>
        <StepInfo>
          <p>Step 1</p>
          <p>Your info</p>
        </StepInfo>
      </StepItemContainer>

      <StepItemContainer>
        <StepNum className={step === 2 && "active"}>2</StepNum>
        <StepInfo>
          <p>Step 2</p>
          <p>Select plan</p>
        </StepInfo>
      </StepItemContainer>

      <StepItemContainer>
        <StepNum className={step === 3 && "active"}>3</StepNum>
        <StepInfo>
          <p>Step 3</p>
          <p>Add-ons</p>
        </StepInfo>
      </StepItemContainer>

      <StepItemContainer>
        <StepNum className={(step === 4 || step === 5) && "active"}>4</StepNum>
        <StepInfo>
          <p>Step 4</p>
          <p>Summary</p>
        </StepInfo>
      </StepItemContainer>
    </StyledSidebar>
  );
}

export default Sidebar;
