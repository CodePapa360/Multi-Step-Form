import styled from "styled-components";
import Heading from "../ui/Heading";
import SubHeading from "../ui/SubHeading";
import FormBody from "../ui/FormBody";
import FormActions from "../ui/FormActions";
import Button from "../ui/Button";
import { addPersonalInfoData } from "./formSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import FormInputs from "../ui/FormInputs";
import { breakpoints } from "../styles/GlobalStyles";
import InputErrorMessage from "../ui/InputErrorMessage";

const phoneRegex = /^[\d\s()+-]{7,15}$/;

const emailRegex = /\S+@\S+\.\S+/;

const InputWrapper = styled.div`
  min-height: 5.5rem;
  align-content: start;
  display: grid;
  grid-template-areas:
    "label"
    "input"
    "error";

  @media screen and (min-width: ${breakpoints.md}) {
    grid-template-areas:
      "label error"
      "input input";
    grid-template-columns: auto 1fr;
  }

  label {
    font-size: 0.9rem;
    font-weight: 500;
    grid-area: label;
  }

  p {
    grid-area: error;
  }
`;

const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => "error" !== prop,
})`
  padding: 0.5rem 1rem;
  outline: none;
  width: 100%;
  border: 2px solid var(--light-gray);
  border-radius: 5px;
  font-weight: 500;
  grid-area: input;
  border-color: ${(props) =>
    props.error === "true" ? "var(--strawberry-red)" : ""};

  &:focus {
    border-color: var(--marine-blue);
    border-color: ${(props) =>
      props.error === "true" ? "var(--strawberry-red)" : ""};
  }

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

function PersonalInfo() {
  const dispatch = useDispatch();
  const { name, email, phone } = useSelector((state) => state.form);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name, email, phone },
  });

  function handleNext(data) {
    dispatch(addPersonalInfoData(data));
  }

  return (
    <FormBody onSubmit={handleSubmit(handleNext)} noValidate>
      <FormInputs>
        <Heading>Personal info</Heading>
        <SubHeading>
          Please provide your name, email address, and phone number
        </SubHeading>

        <InputWrapper>
          <label htmlFor="name">Name</label>
          <Input
            error={`${!!errors.name}`}
            autoComplete="off"
            type="text"
            name="name"
            id="name"
            placeholder="e.g Stephen King"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <InputErrorMessage>{errors.name.message}</InputErrorMessage>
          )}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="email">Email Address</label>
          <Input
            error={`${!!errors.email}`}
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            placeholder="e.g stephenking.lorem.com"
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: emailRegex,
                message: "Please provide your valid email address.",
              },
            })}
          />
          {errors.email && (
            <InputErrorMessage>{errors.email.message}</InputErrorMessage>
          )}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="phone">Phone Number</label>
          <Input
            error={`${!!errors.phone}`}
            autoComplete="off"
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g +1 234 567 890"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[\d\s()+-]{7,15}$/,
                message: "Please provide a valid mobile number.",
              },
            })}
          />
          {errors.phone && (
            <InputErrorMessage>{errors.phone.message}</InputErrorMessage>
          )}
        </InputWrapper>
      </FormInputs>

      <FormActions>
        <Button type="submit" position="right">
          Next step
        </Button>
      </FormActions>
    </FormBody>
  );
}

export default PersonalInfo;
