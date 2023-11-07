import styled from "styled-components";
import Heading from "../ui/Heading";
import SubHeading from "../ui/SubHeading";

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
  return (
    <>
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
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="e.g stephenking.lorem.com"
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="e.g +1 234 567 890"
        />
      </InputWrapper>
    </>
  );
}

export default PersonalInfo;
