import { useState } from "react";
import "./App.css";

function ResultadoEndereco(props) {
  return (
    <>
      <div className="col-sm-4 mt-2">
        <input
          readOnly
          className="form-control"
          placeholder="cep"
          value={props.endereco.cep}
        />
      </div>
      <div className="col-sm-8 mt-2">
        <input
          readOnly
          className="form-control"
          placeholder="logradouro"
          value={props.endereco.logradouro}
        />
      </div>
      <div className="col-sm-4 mt-2">
        <input
          readOnly
          className="form-control"
          placeholder="bairro"
          value={props.endereco.bairro}
        />
      </div>
      <div className="col-sm-4 mt-2">
        <input
          readOnly
          className="form-control"
          placeholder="cidade"
          value={props.endereco.localidade}
        />
      </div>
      <div className="col-sm-4 mt-2">
        <input
          readOnly
          className="form-control"
          placeholder="estado"
          value={props.endereco.uf}
        />
      </div>
    </>
  );
}

function App() {
  const [cep, setCep] = useState("");
  //const [campoEndereco, setCampoEndereco] = useState("");
  const [alerta, setAlerta] = useState("");

  const [endereco, setEndereco] = useState({
    cep: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  function validaCep() {
    if (!cep) {
      setAlerta("cep obrigatório");
      return;
    }
    if (cep.length !== 8) {
      setAlerta("cep inválido");
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resposta) => resposta.json())
      .then((success) => {
        setAlerta("");
        setEndereco(success);
        console.log("endereço", success);
      })
      .catch((error) => {
        console.log("error", error);
        setAlerta("cep inválido");
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
        <ResultadoEndereco endereco={endereco} />
      </div>
    </div>
  );
}

export default App;
