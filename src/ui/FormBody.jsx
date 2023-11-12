import styled from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

const StyledFormBody = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 0;
  }
`;

export default StyledFormBody;
