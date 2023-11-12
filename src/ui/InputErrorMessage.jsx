import styled from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

const InputErrorMessage = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--strawberry-red);

  @media screen and (min-width: ${breakpoints.md}) {
    text-align: right;
  }
`;

export default InputErrorMessage;
