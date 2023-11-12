import styled from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

const StyledFormInputs = styled.div`
  background-color: var(--white);
  padding: 1.5rem;
  width: calc(100% - 2rem);
  margin-inline: auto;
  border-radius: 10px;
  margin-top: -5rem;
  margin-bottom: 1.5rem;
  color: var(--marine-blue);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);

  max-width: 670px;

  @media screen and (min-width: ${breakpoints.md}) {
    margin: 0;
    width: auto;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: none;
  }
`;

export default StyledFormInputs;
