import styled from "styled-components";
import Heading from "../ui/Heading";
import SubHeading from "../ui/SubHeading";
import FormBody from "../ui/FormBody";
import FormActions from "../ui/FormActions";
import { allPlans, nextStep, prevStep, toggleDuration } from "./formSlice";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import FormInputs from "../ui/FormInputs";
import Plan from "./Plan";

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

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    /* background-color: red; */
    min-height: 11rem;
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
  const { isYearly } = useSelector((state) => state.form);

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
          {allPlans.map((plan) => (
            <Plan plan={plan} key={plan.name} />
          ))}
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
        <Button onClick={handlePrev} position="left">
          Go back
        </Button>

        <Button type="submit" position="right">
          Next step
        </Button>
      </FormActions>
    </FormBody>
  );
}

export default Plans;
