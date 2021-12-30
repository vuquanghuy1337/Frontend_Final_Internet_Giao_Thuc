import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

import LoginForm from "../components/LoginForm";
import MainLayout from "../components/MainLayout";

export default function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="Home">
      <div className="d-flex justify-content-center align-items-center h-75">
        {user ? <MainLayout /> : <LoginForm></LoginForm>}
      </div>
    </div>
  );
}
