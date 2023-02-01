import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index";
import Home from "./pages/Home/index";
import Cadastro from "./pages/Cadastro/index";
import Notfound from "./pages/Notfound/index";
import RotaLogada from "./layouts/RotaLogada";
import Array from "./pages/LogicaArray/index";
import NumerosOrdenados from "./pages/LogicaNumerosOrdenados/index";
import MenorIdade from "./pages/Menor18/index";
import Triangulo from "./pages/Triangulo/index";
import Vogais from "./pages/Vogais/index";
import TelefoneFormatado from "./pages/Telefone";
import Caracter from "./pages/Caracter/index";
import TresValores from "./pages/TresValores";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/App" element={<RotaLogada />}>
          <Route path="/App/Cadastro" element={<Cadastro />}></Route>
          <Route path="/App/Dashboard" element={<Dashboard />}></Route>
          <Route path="/App/Array" element={<Array />}></Route>
          <Route
            path="/App/NumerosOrdenados"
            element={<NumerosOrdenados />}
          ></Route>
          <Route
            path="/App/NumerosOrdenados"
            element={<NumerosOrdenados />}
          ></Route>
          <Route path="/App/MenorIdade" element={<MenorIdade />}></Route>
          <Route path="/App/Triangulo" element={<Triangulo />}></Route>
          <Route path="/App/Vogais" element={<Vogais />}></Route>
          <Route path="/App/Telefone" element={<TelefoneFormatado />}></Route>
          <Route path="/App/Caracter" element={<Caracter />}></Route>
          <Route path="/App/TresValores" element={<TresValores />}></Route>
          <Route path="/App/*" element={<Notfound />}></Route>
        </Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
