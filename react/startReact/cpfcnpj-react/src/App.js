import { useState } from "react";

function App() {
  const [documento, setDocumento] = useState("");
  const [senha, setSenha] = useState("");

  function mudarSelecao(e) {
    if (e === "cnpj") {
      console.log(e);
      setDocumento((documento.placeholder = "Digite seu CNPJ"));
    } else if (e === "cpf") {
      setDocumento((documento.placeholder = "Digite seu CPF"));
    }
  }

  function exibirSenha() {
    console.log(senha);
    if (senha.type === "password") {
      setSenha.type = "text";
    } else {
      setSenha.type = "password";
    }
  }

  return (
    <div className="container">
      <div id="campos" className="mt-4">
        <div className="row">
          <div className="col-md-3">
            <label className="form-label">Tipo de documento:</label>
            <select
              className="form-select"
              id="valueSelect"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
            >
              <option value="cpf">CPF</option>
              <option value="cnpj">CNPJ</option>
            </select>
          </div>
          <div className="col d-flex align-content-end flex-wrap">
            <input
              className="form-control"
              id="documento"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              placeholder="Digite seu CPF"
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-12 text-center">
            <input
              className="form-control mt-2"
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
          <div className="col col-12 text-center">
            <button
              type="button"
              className="btn btn-success mt-2"
              id="mostrarSenha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              onClick={exibirSenha}
            >
              Mostrar Senha
            </button>

            <button className="btn btn-success mt-2 " type="submit" id="enviar">
              Enviar
            </button>
            <div className="mt-2" id="msg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
