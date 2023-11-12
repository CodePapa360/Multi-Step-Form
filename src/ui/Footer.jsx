import styled from "styled-components";
import Attribution from "./Attribution";

const StyledFooter = styled.footer`
  margin-top: auto;
  text-align: center;
  box-shadow: 0 0 15px #00000033;
  width: 100%;
  /* background-color: var(--white); */
`;

function Footer() {
  return (
    <StyledFooter>
      <Attribution />
    </StyledFooter>
  );
}

export default Footer;
