import { useState } from "react";

function App() {
  const [tipoDocumento, setTipoDocumento] = useState("cpf");
  const [documento, setDocumento] = useState("");
  const [senha, setSenha] = useState("");
  const [tipoSenha, setTipoSenha] = useState("password");
  const [mensagem, setMensagem] = useState("");
  const [validForm, setValidForm] = useState(false);

  function exibirSenha() {
    if (tipoSenha === "password") {
      setTipoSenha("text");
    } else {
      setTipoSenha("password");
    }
  }

  function enviar() {
    if (documento && senha) {
      setMensagem("enviado com sucesso");
      setValidForm(true);
    } else {
      setMensagem("informações inválidas");
      setValidForm(false);
    }
    limpar();
  }

  function limpar() {
    setDocumento("");
    setSenha("");
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
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
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
              placeholder={`Digite seu ${tipoDocumento.toUpperCase()}`}
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-12 text-center">
            <input
              className="form-control mt-2"
              type={tipoSenha}
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
          <div className="col col-12 text-center">
            <button
              type="button"
              className="btn btn-success m-2"
              id="mostrarSenha"
              onClick={exibirSenha}
            >
              Mostrar Senha
            </button>

            <button
              className="btn btn-success m-2 "
              onClick={enviar}
              id="enviar"
            >
              Enviar
            </button>
            {mensagem && (
              <div
                className={`mt-2 alert ${
                  validForm ? "alert-success" : "alert-warning"
                } `}
                id="msg"
              >
                {mensagem}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
