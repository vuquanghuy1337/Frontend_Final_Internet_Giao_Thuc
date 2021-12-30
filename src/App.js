import { useContext, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import { NAVBAR_ROUTE, ROUTE } from "./route";
import { UserContext } from "./utils/UserContext";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <main className="main">
      <UserContext.Provider value={value}>
        <Navbar route={NAVBAR_ROUTE} />
        <ROUTE />
      </UserContext.Provider>
    </main>
  );
}

export default App;
