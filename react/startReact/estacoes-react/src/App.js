import { useState } from "react";

function App() {
  const [mostrar, setMostrar] = useState("");
  const [mes, setMes] = useState([]);

  function mostrarEstacao() {
    if (mes === "dezembro" || mes === "janeiro" || mes === "fevereiro") {
      setMostrar("Verão");
    } else if (mes === "marco" || mes === "abril" || mes === "maio") {
      setMostrar("Outono");
    } else if (mes === "junho" || mes === "julho" || mes === "agosto") {
      setMostrar("Iverno");
    } else if (mes === "setembro" || mes === "outubro" || mes === "novembro") {
      setMostrar("Primavera");
    }
  }

  return (
    <div class="container text-center">
      <div class="row justify-content-md-center mt-4">
        <div class="col">
          <label class="form-label">Escolha o mês:</label>
          <select id="mes" value={mes} class="form-select form-select-sm mb-3">
            <option value="janeiro">Janeiro</option>
            <option value="fevereiro">Fevereiro</option>
            <option value="marco">Março</option>
            <option value="abril">Abril</option>
            <option value="maio">Maio</option>
            <option value="junho">Junho</option>
            <option value="julho">Julho</option>
            <option value="agosto">Agosto</option>
            <option value="setembro">Setembro</option>
            <option value="outubro">Outubro</option>
            <option value="novembro">Novembro</option>
            <option value="dezembro">Dezembro</option>
          </select>
        </div>
        <div class="col">
          <button
            class="btn btn-outline-primary btn-sm mt-4"
            onClick={mostrarEstacao}
          >
            Exibir estação
          </button>
        </div>
      </div>
      <div class="row text-center">
        <div class="col" id="mostrar">
          {mostrar}
        </div>
      </div>
    </div>
  );
}

export default App;
