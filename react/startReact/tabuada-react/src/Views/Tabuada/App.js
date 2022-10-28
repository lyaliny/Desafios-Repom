import { useState } from "react";

import Menu from "../../Componentes/Menu/Menu";

function App() {
  const [numero, setNumero] = useState("");
  const [resposta, setResposta] = useState([]);
  const [msgErro, setMsgErro] = useState("");

  function calculo() {
    let tabuada = [];
    if (numero) {
      for (let x = 1; x <= 10; x++) {
        tabuada.push(`${numero} x ${x} = ${parseInt(numero) * x}`);
      }
      setResposta(tabuada);
      setMsgErro("");
    } else {
      setMsgErro("Digite número válido.");
      setResposta([]);
    }
    limpar();
  }
  function limpar() {
    setNumero("");
  }

  return (
    <div className="container">
      <Menu />
      <div className="row justify-content-center">
        <div className="col-md-6 mt-3">
          <label className="form-label">Tabuada do número:</label>
          <input
            className="form-control"
            id="num"
            type="number"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
        <div className="col-md-2 d-flex align-items-end">
          <button className="btn btn-secondary" onClick={calculo}>
            Exibir
          </button>
        </div>
        <div className="col-md-8">
          Tabuada: {msgErro}
          <div id="resposta">
            {resposta.map((item) => (
              <>
                {item} <br />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
