import Navbar from "./components/Navbar";
import { NAVBAR_ROUTE, ROUTE } from "./route";

function App() {
  return (
    <>
      <Navbar route={NAVBAR_ROUTE} />

      <ROUTE />
    </>
  );
}

export default App;
