import GlobalStyles from "./styles/GlobalStyles";

import Form from "./ui/Form";
import Sidebar from "./ui/Sidebar";
import styled from "styled-components";

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 12rem auto;
  min-height: 100dvh;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Sidebar />
        <Form />
      </StyledApp>
    </>
  );
}

export default App;
