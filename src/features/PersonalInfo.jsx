import styled from "styled-components";
import Heading from "../ui/Heading";
import SubHeading from "../ui/SubHeading";
import FormBody from "../ui/FormBody";
import FormActions from "../ui/FormActions";
import Button from "../ui/Button";
import { nextStep, prevStep } from "./formSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    font-size: 0.9rem;
    font-weight: 500;
  }

  input {
    padding: 0.5rem 1rem;
    outline: none;
    border: 2px solid var(--light-gray);
    border-radius: 5px;
    font-weight: 500;

    &:focus {
      border-color: var(--marine-blue);
    }
  }
`;

function PersonalInfo() {
  const dispatch = useDispatch();

  const { name, email, phone } = useSelector((state) => state.form);
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);

  function handleNext(e) {
    e.preventDefault();

    dispatch(nextStep());
  }

  return (
    <>
      <FormBody>
        <Heading>Personal info</Heading>
        <SubHeading>
          Please provide your name, email address, and phone number
        </SubHeading>

        <InputWrapper>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g Stephen King"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="e.g stephenking.lorem.com"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="e.g +1 234 567 890"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
        </InputWrapper>
      </FormBody>

      <FormActions>
        <Button onClick={handleNext} positon="right">
          Next step
        </Button>
      </FormActions>
    </>
  );
}

export default PersonalInfo;
