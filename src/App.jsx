import GlobalStyles from "./styles/GlobalStyles";

import Forms from "./ui/Forms";
import Sidebar from "./ui/Sidebar";
import Footer from "./ui/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Sidebar />
        <Forms />
        <Footer />
      </div>
    </>
  );
}

export default App;
