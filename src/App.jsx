import { useSelector } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";

import Form from "./ui/Form";
import Sidebar from "./ui/Sidebar";
import { getCurrentStep } from "./features/formSlice";
import ThankYou from "./features/ThankYou";
import styled from "styled-components";

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 12rem auto;
  /* justify-items: center; */
  min-height: 100dvh;
`;

function App() {
  const step = useSelector(getCurrentStep);

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Sidebar />
        {step < 5 && <Form />}

        {step === 5 && <ThankYou />}
      </StyledApp>
    </>
  );
}

export default App;
