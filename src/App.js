import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ROUTE } from "./route";

function App() {
  const renderRoute = () => {
    return ROUTE.map((route, key) => {
      return <Route key={key} path={route.url} element={route.component} />;
    });
  };

  return (
    <>
      <Navbar route={ROUTE} />
      <Routes>{renderRoute()}</Routes>
    </>
  );
}

export default App;
