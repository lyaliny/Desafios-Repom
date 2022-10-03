import { useState } from "react";
import "./App.css";

function App() {
  const [aprender, setAprender] = useState("como funciona o React");
  const [nome, setNome] = useState("Andrews");
  let teste = "aprendendo React";
  // function alterarTeste(texto) {
  //   teste = texto;
  // }
  return (
    <div className="App">
      <header className="App-header">
        {teste} {aprender}
        <div>
          {/* <button onClick={() => alterarTeste("React para iniciante")}>
            Alterar teste
          </button> */}
          <button onClick={() => setAprender("React para intermediario")}>
            Alterar aprender
          </button>
        </div>
        <div>
          <input
            placeholder="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          {nome}
        </div>
      </header>
    </div>
  );
}

export default App;
