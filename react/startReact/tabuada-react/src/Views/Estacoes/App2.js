import Menu from "../../Componentes/Menu/Menu";
import { useState } from "react";

function App2() {
  const [mostrar, setMostrar] = useState("");
  const [mes, setMes] = useState([]);
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  function mostrarEstacao() {
    if (mes === "Dezembro" || mes === "Janeiro" || mes === "Fevereiro") {
      setMostrar("Verão");
    } else if (mes === "Março" || mes === "Abril" || mes === "Maio") {
      setMostrar("Outono");
    } else if (mes === "Junho" || mes === "Julho" || mes === "Agosto") {
      setMostrar("Iverno");
    } else if (mes === "Setembro" || mes === "Outubro" || mes === "Novembro") {
      setMostrar("Primavera");
    }
  }

  return (
    <div className="container text-center">
      <Menu />
      <div className="row justify-content-md-center mt-4">
        <div className="col">
          <label className="form-label">Escolha o mês:</label>
          <select
            id="mes"
            value={mes}
            onChange={(e) => setMes(e.target.value)}
            className="form-select form-select-sm mb-3"
          >
            {meses.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
        <div className="col">
          <button
            className="btn btn-outline-primary btn-sm mt-4"
            onClick={mostrarEstacao}
          >
            Mostrar Estação
          </button>
        </div>
      </div>
      <div className="row text-center">
        <div className="col" id="mostrar">
          {mostrar}
        </div>
      </div>
    </div>
  );
}

export default App2;
