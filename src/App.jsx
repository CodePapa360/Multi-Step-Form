import { useSelector } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";

import Form from "./ui/Form";
import Sidebar from "./ui/Sidebar";
import { getCurrentStep } from "./features/formSlice";
import ThankYou from "./features/ThankYou";

function App() {
  const step = useSelector(getCurrentStep);

  return (
    <>
      <GlobalStyles />
      <div>
        <Sidebar />
        {step < 5 && <Form />}

        {step === 5 && <ThankYou />}
      </div>
    </>
  );
}

export default App;
