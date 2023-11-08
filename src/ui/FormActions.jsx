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

function FormActions({ children }) {
  return <StyledFormActions>{children}</StyledFormActions>;
}

export default FormActions;
