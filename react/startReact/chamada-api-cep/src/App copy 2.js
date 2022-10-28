import { useState } from "react";
import "./App.css";

function App() {
  const [cep, setCep] = useState("");
  const [campoEndereco, setCampoEndereco] = useState("");

  function validaCep() {
    if (!cep) {
      setCampoEndereco("cep obrigatório");
      return;
    }
    if (cep.length !== 8) {
      setCampoEndereco("cep inválido");
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resposta) => resposta.json())
      .then((success) => {
        console.log("enderço", success);
        setCampoEndereco(
          <>
            <div className="col-sm-4 mt-2">
              <input
                readOnly
                className="form-control"
                placeholder="cep"
                value={success.cep}
              />
            </div>
            <div className="col-sm-8 mt-2">
              <input
                readOnly
                className="form-control"
                placeholder="logradouro"
                value={success.logradouro}
              />
            </div>
            <div className="col-sm-4 mt-2">
              <input
                readOnly
                className="form-control"
                placeholder="bairro"
                value={success.bairro}
              />
            </div>
            <div className="col-sm-4 mt-2">
              <input
                readOnly
                className="form-control"
                placeholder="cidade"
                value={success.localidade}
              />
            </div>
            <div className="col-sm-4 mt-2">
              <input
                readOnly
                className="form-control"
                placeholder="estado"
                value={success.uf}
              />
            </div>
          </>
        );
      })
      .catch((error) => {
        console.log("error", error);
        setCampoEndereco("Cep inválido");
      });

    limpaCampo();
  }

  function limpaCampo() {
    setCep("");
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-12 col-md-6 mt-3">
          <label className="form-label">Buscador de CEP</label>
          <input
            className="form-control"
            id="cep"
            placeholder="Digite seu cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </div>
        <div className="col-sm-12 col-md-6 mt-5">
          <button
            className="btn btn-dark"
            id="botao"
            onClick={validaCep}
            type="button"
          >
            Buscar
          </button>
        </div>
      </div>

      <div className="row" id="campo-endereco">
        {campoEndereco}
      </div>
    </div>
  );
}

export default App;
