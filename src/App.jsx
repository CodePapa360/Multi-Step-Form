import GlobalStyles from "./styles/GlobalStyles";

import Form from "./ui/Form";
import Sidebar from "./ui/Sidebar";

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Sidebar />
        <Form />
      </div>
    </>
  );
}

export default App;
