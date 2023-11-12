import styled from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

const StyledHeading = styled.h2`
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 2rem;
  }
`;

export default StyledHeading;
