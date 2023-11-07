import styled from "styled-components";

function Heading({ children }) {
  const StyledHeading = styled.h2`
    margin-bottom: 1rem;
    font-weight: 700;
  `;

  return <StyledHeading>{children}</StyledHeading>;
}

export default Heading;
