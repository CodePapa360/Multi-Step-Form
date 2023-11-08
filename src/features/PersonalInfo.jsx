import styled from "styled-components";
import Heading from "../ui/Heading";
import SubHeading from "../ui/SubHeading";
import FormBody from "../ui/FormBody";
import FormActions from "../ui/FormActions";
import Button from "../ui/Button";
import { addPersonalInfoData, prevStep } from "./formSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInputs from "../ui/FormInputs";

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
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: { name, email, phone },
  });

  function handleNext(data) {
    dispatch(addPersonalInfoData(data));
  }

  return (
    <FormBody onSubmit={handleSubmit(handleNext)}>
      <FormInputs>
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
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="e.g stephenking.lorem.com"
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide your valid email address.",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="e.g +1 234 567 890"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value:
                  /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                message: "Please provide your valid mobile number.",
              },
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </InputWrapper>
      </FormInputs>

      <FormActions>
        <Button type="submit" positon="right">
          Next step
        </Button>
      </FormActions>
    </FormBody>
  );
}

export default PersonalInfo;
