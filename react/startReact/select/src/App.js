import { useState } from "react";
import "./App.css";

function App() {
  const [selecao, setSelecao] = useState("");
  const [opcoes] = useState([
    { sigla: "AC", descricao: "Acre" },
    { sigla: "AL", descricao: "Alagoas" },
    { sigla: "AP", descricao: "Amapá" },
    { sigla: "AM", descricao: "Amazonas" },
    { sigla: "BA", descricao: "Bahia" },
    { sigla: "CE", descricao: "Ceará" },
    { sigla: "ES", descricao: "Espírito Santo" },
    { sigla: "GO", descricao: "Goiás" },
    { sigla: "MA", descricao: "Maranhão" },
    { sigla: "MT", descricao: "Mato Grosso" },
    { sigla: "MS", descricao: "Mato Grosso do Sul" },
    { sigla: "MG", descricao: "Minas Gerais" },
    { sigla: "PA", descricao: "Pará" },
    { sigla: "PB", descricao: "Paraíba" },
    { sigla: "PR", descricao: "Paraná" },
    { sigla: "PE", descricao: "Pernambuco" },
    { sigla: "PI", descricao: "Piauí" },
    { sigla: "RJ", descricao: "Rio de Janeiro" },
    { sigla: "RN", descricao: "Rio Grande do Norte" },
    { sigla: "RS", descricao: "Rio Grande do Sul" },
    { sigla: "RO", descricao: "Rondônia" },
    { sigla: "RR", descricao: "Roraima" },
    { sigla: "SC", descricao: "Santa Catarina" },
    { sigla: "SP", descricao: "São Paulo" },
    { sigla: "SE", descricao: "Sergipe" },
    { sigla: "TO", descricao: "Tocantins" },
    { sigla: "DF", descricao: "Distrito Federal" },
  ]);

  function enviarEstado() {
    alert(`O Estado selecionado foi ${selecao}`);
  }

  return (
    <div className="container mt-4">
      <div className="row align-items-center">
        <div className="col">
          <h4>Lista de Estado:</h4>
          <select
            id="selecao"
            className="form-select mt-3"
            aria-label="Default select example"
            value={selecao}
            onChange={(e) => setSelecao(e.target.value)}
          >
            {opcoes.map((estado) => (
              <option
                value={`${estado.sigla} ${estado.descricao}`}
                key={estado.sigla}
              >
                {estado.sigla} - {estado.descricao}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={enviarEstado}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
