import styled from "styled-components";
import Heading from "../ui/Heading";
import SubHeading from "../ui/SubHeading";
import FormBody from "../ui/FormBody";
import FormActions from "../ui/FormActions";
import {
  plans,
  nextStep,
  prevStep,
  toggleDuration,
  updatePlan,
} from "./formSlice";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import FormInputs from "../ui/FormInputs";

const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  input {
    display: none;
  }

  input[type="radio"]:checked + label {
    border-color: var(--purplish-blue);
    background-color: var(--magnolia);
  }
`;

const PlanWrapper = styled.label`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  border: 2px solid var(--light-gray);
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 10px;
  user-select: none;

  h3 {
    font-weight: 700;
  }

  p {
    color: var(--cool-gray);
  }
`;

const DurationContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--magnolia);
  border-radius: 10px;
`;

const Duration = styled.label`
  display: flex;
  justify-content: center;
  height: 20px;
  position: relative;
  width: 42px;
  cursor: pointer;

  input {
    display: none;
  }

  div {
    background-color: var(--marine-blue);
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }
  div:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 12px;
    width: 12px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
  }

  input:checked + div:before {
    transform: translateX(22px);
  }
  div {
    border-radius: 34px;
  }
  div:before {
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
    transform: translateX(-7px);
    font-weight: 500;
  }

  span::before {
    content: "Monthly";
    transform: translateX(-35px);
    color: var(--marine-blue);
  }

  span::after {
    content: "Yearly";
    transform: translateX(35px);
    color: var(--cool-gray);
  }

  input:checked ~ span::before {
    color: var(--cool-gray);
  }

  input:checked ~ span::after {
    color: var(--marine-blue);
  }
`;

function Plans() {
  const dispatch = useDispatch();
  const { isYearly, plan } = useSelector((state) => state.form);

  function handlePrev() {
    dispatch(prevStep());
  }

  function handleYearlySub() {
    dispatch(toggleDuration());
  }

  return (
    <FormBody onSubmit={() => dispatch(nextStep())}>
      <FormInputs>
        <Heading>Plans</Heading>
        <SubHeading>
          You have the option for monthly or yearly billing.
        </SubHeading>

        <PlansContainer>
          <input
            type="radio"
            name="plan"
            id="arcade"
            onChange={() => dispatch(updatePlan("arcade"))}
            checked={plan.name === "arcade"}
          />
          <PlanWrapper htmlFor="arcade">
            <span>
              <img src="/images/icon-arcade.svg" alt="Arcade" />
            </span>
            <span>
              <h3>Arcade</h3>
              <p>{`$${
                isYearly
                  ? `${plans.arcade.yearly}/yr`
                  : `${plans.arcade.monthly}/mo`
              }`}</p>
            </span>
          </PlanWrapper>

          <input
            type="radio"
            name="plan"
            id="advanced"
            onChange={() => dispatch(updatePlan("advanced"))}
            checked={plan.name === "advanced"}
          />
          <PlanWrapper htmlFor="advanced">
            <span>
              <img src="/images/icon-advanced.svg" alt="advanced" />
            </span>
            <span>
              <h3>Advanced</h3>
              <p>{`$${
                isYearly
                  ? `${plans.advanced.yearly}/yr`
                  : `${plans.advanced.monthly}/mo`
              }`}</p>
            </span>
          </PlanWrapper>

          <input
            type="radio"
            name="plan"
            id="pro"
            onChange={() => dispatch(updatePlan("pro"))}
            checked={plan.name === "pro"}
          />
          <PlanWrapper htmlFor="pro">
            <span>
              <img src="/images/icon-pro.svg" alt="pro" />
            </span>
            <span>
              <h3>Pro</h3>
              <p>{`$${
                isYearly ? `${plans.pro.yearly}/yr` : `${plans.pro.monthly}/mo`
              }`}</p>
            </span>
          </PlanWrapper>
        </PlansContainer>

        <DurationContainer>
          <Duration htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              checked={isYearly}
              onChange={handleYearlySub}
            />
            <div></div>
            <span></span>
          </Duration>
        </DurationContainer>
      </FormInputs>

      <FormActions>
        <Button onClick={handlePrev} positon="left">
          Go back
        </Button>

        <Button type="submit" positon="right">
          Next step
        </Button>
      </FormActions>
    </FormBody>
  );
}

export default Plans;
