import Menu from "../components/Menu/Index";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function RotaLogada() {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    const local = localStorage.getItem("login");
    if (local) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  return auth ? (
    <>
      <Menu />
      <Outlet />
    </>
  ) : (
    <>Acesso negado!</>
  );
}

export default RotaLogada;
