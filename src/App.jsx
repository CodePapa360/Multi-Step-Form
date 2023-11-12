import GlobalStyles, { breakpoints } from "./styles/GlobalStyles";

import Form from "./ui/Form";
import Sidebar from "./ui/Sidebar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
`;

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 12rem 1fr;

  min-height: 100dvh;
  max-width: ${breakpoints.md};
  width: 100%;

  @media screen and (min-width: ${breakpoints.md}) {
    grid-template-columns: 18rem 1fr;
    grid-template-rows: minmax(35rem, auto);
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: var(--white);
    border-radius: 16px;
    min-height: unset;
    gap: 3rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <StyledApp>
          <Sidebar />
          <Form />
        </StyledApp>
      </Container>
    </>
  );
}

export default App;
