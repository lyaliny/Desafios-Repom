import { useState } from "react";

function App() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [operador, setOperador] = useState("soma");
  const [resultado, setResultado] = useState("Nenhum calculo foi feito ainda.");

  function limpar() {
    setN1("");
    setN2("");
    setOperador("soma");
  }

  function executarCalculo() {
    if (!n1) {
      setResultado("Preencha o campo Numero 1");
      return;
    } else if (!n2) {
      setResultado("Preencha o campo Numero 2");
      return;
    } else if (operador === "soma") {
      setResultado(parseInt(n1) + parseInt(n2));
    } else if (operador === "subtracao") {
      setResultado(parseInt(n1) - parseInt(n2));
    } else if (operador === "divisao") {
      setResultado(parseInt(n1) / parseInt(n2));
    } else if (operador == "multiplicacao") {
      setResultado(parseInt(n1) * parseInt(n2));
    } else {
      setResultado("Digite um número");
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-sm-6 ms-3">
          <div className="mt-3">
            <label className="form-label">Número 1</label>
            <input
              type="number"
              id="n1"
              className="form-control"
              value={n1}
              onChange={(e) => setN1(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label className="form-label">Operador</label>
            <select
              id="operador"
              className="form-select"
              value={operador}
              onChange={(e) => setOperador(e.target.value)}
            >
              <option value="soma">+</option>
              <option value="subtracao">-</option>
              <option value="divisao">/</option>
              <option value="multiplicacao">x</option>
            </select>
          </div>
          <div className="mt-3">
            <label className="form-label">Número 2</label>
            <input
              type="number"
              id="n2"
              className="form-control"
              value={n2}
              onChange={(e) => setN2(e.target.value)}
            />
          </div>
          <div className="mt-3 text-center">
            <button
              className="btn btn-dark"
              id="calcular"
              onClick={executarCalculo}
            >
              Calcular
            </button>
          </div>
          <div className="mt-3 text-center text-info bg-light">
            <label className="form-label">
              Resultado:<span>{resultado}</span>
            </label>
          </div>
          <div className="mt-3 text-center">
            <button
              className="btn btn-dark"
              type="button"
              id="limpar"
              onClick={limpar}
            >
              Limpar Campos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
