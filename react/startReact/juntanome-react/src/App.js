import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div>
            <label className="form-label">Nome:</label>
            <input
              className="form-control"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div>
            <label className="form-label">Sobrenome</label>
            <input
              className="form-control"
              id="sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <div className="mt-3 text-center">
            <label className="form-label">Nome inteiro é:</label>
          </div>
          <div
            id="mostraTexto"
            className="mt-3 text-center alert alert-primary"
          >
            {nome} {sobrenome}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
