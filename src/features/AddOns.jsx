import styled from "styled-components";
import Heading from "../ui/Heading";
import SubHeading from "../ui/SubHeading";
import FormBody from "../ui/FormBody";
import FormActions from "../ui/FormActions";
import Button from "../ui/Button";
import { addAddonsData, prevStep } from "./formSlice";
import { useDispatch } from "react-redux";
import FormInputs from "../ui/FormInputs";

const AddonsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ExtentionWrapper = styled.li`
  label {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    border: 2px solid var(--light-gray);
    padding: 0.5rem;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    user-select: none;

    span {
      margin-right: auto;
      h3 {
        font-size: 1rem;
        font-weight: 500;
      }

      p {
        font-size: 0.7rem;
        color: var(--cool-gray);
      }
    }

    > p {
      font-size: 0.7rem;
      color: var(--purplish-blue);
      font-weight: 500;
    }
  }

  //////////

  label::before {
    content: "✔";
    height: 1.2rem;
    width: 1.2rem;
    background-color: var(--white);
    border-radius: 5px;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--cool-gray);
  }

  input {
    display: none;
  }

  input:checked + label::before {
    background-color: var(--purplish-blue);
    border: 2px solid var(--purplish-blue);
  }

  input:checked + label {
    background-color: var(--magnolia);
    border: 2px solid var(--purplish-blue);
  }
`;

function AddOns() {
  const dispatch = useDispatch();

  function handleNext(e) {
    e.preventDefault();

    dispatch(addAddonsData());
  }

  function handlePrev(e) {
    e.preventDefault();
    dispatch(prevStep());
  }

  return (
    <FormBody>
      <FormInputs>
        <Heading>Pick add-ons</Heading>
        <SubHeading>Add-ons help enhance your gaming experience.</SubHeading>

        <AddonsContainer>
          <ExtentionWrapper>
            <input type="checkbox" name="onlineService" id="onlineService" />
            <label htmlFor="onlineService">
              <span>
                <h3>Online Service</h3>
                <p>Access to multiplayer games</p>
              </span>

              <p>+$1/mo</p>
            </label>
          </ExtentionWrapper>

          <ExtentionWrapper>
            <input type="checkbox" name="largerStorage" id="largerStorage" />

            <label htmlFor="largerStorage">
              <span>
                <h3>Larger Storage</h3>
                <p>Extra 1TB of cloud save</p>
              </span>

              <p>+$2/mo</p>
            </label>
          </ExtentionWrapper>

          <ExtentionWrapper>
            <input
              type="checkbox"
              name="customizableProfile"
              id="customizableProfile"
            />

            <label htmlFor="customizableProfile">
              <span>
                <h3>Customizable Profile</h3>
                <p>Custom theme on your profile</p>
              </span>

              <p>+$2/mo</p>
            </label>
          </ExtentionWrapper>
        </AddonsContainer>
      </FormInputs>

      <FormActions>
        <Button onClick={handlePrev} positon="left">
          Go back
        </Button>

        <Button onClick={handleNext} positon="right">
          Next step
        </Button>
      </FormActions>
    </FormBody>
  );
}

export default AddOns;
