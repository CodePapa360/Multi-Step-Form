import styled from "styled-components";

const StyledFormBody = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media screen and (min-width: 1000px) {
    margin-top: 0;
    /* justify-content: center; */
  }
`;

export default StyledFormBody;
