import styled from "styled-components";

function SubHeading({ children }) {
  const StyledHeading = styled.p`
    color: var(--cool-gray);
    margin-bottom: 1rem;
  `;

  return <StyledHeading>{children}</StyledHeading>;
}

export default SubHeading;
