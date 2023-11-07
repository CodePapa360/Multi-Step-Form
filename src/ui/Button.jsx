import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-transform: capitalize;

  ${(props) =>
    props.positon === "left" &&
    css`
      color: var(--cool-gray);
      background-color: transparent;

      &:active {
        color: var(--marine-blue);
      }
    `}

  ${(props) =>
    props.positon === "right" &&
    css`
      margin-left: auto;
      display: inline-block;
      background-color: var(--marine-blue);
      color: var(--white);

      &:active {
        background-color: var(--purplish-blue);
      }
    `}
`;

function Button({ positon, onClick, children }) {
  return (
    <StyledButton onClick={onClick} positon={positon}>
      {children}
    </StyledButton>
  );
}

export default Button;
