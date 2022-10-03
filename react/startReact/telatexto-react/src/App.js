import { useState } from "react";

function App() {
  const [textoUsuario, setTextoUsuario] = useState("Repom");
  const [corTexto, setCorTexto] = useState("#CCCCCC");
  const [fonte, setFonte] = useState("Times New Roman");
  const [tamanho, setTamanho] = useState("10");
  const [tipo, setTipo] = useState("Normal");
  const [newText, setNewText] = useState({});

  function aplicarAlteracoes() {
    setNewText({
      color: corTexto,
      fontFamily: fonte,
      fontSize: tamanho + "px",
      fontWeight: tipo,
    });
  }

  return (
    <div>
      <div>
        <label>Digite seu texto</label>
        <input
          type="text"
          id="texto"
          value={textoUsuario}
          onChange={(e) => setTextoUsuario(e.target.value)}
        />
      </div>
      <div>
        <label>Selecione a cor do texto</label>
        <input
          id="cores"
          type="color"
          value={corTexto}
          onChange={(e) => setCorTexto(e.target.value)}
        />
      </div>
      <div>
        <label>Selecione o estilo da fonte:</label>
      </div>
      <div>
        <select
          id="fonte"
          value={fonte}
          onChange={(e) => setFonte(e.target.value)}
        >
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Arial">Arial</option>
        </select>
      </div>
      <div>
        <label>Selecione o tamanho da fonte</label>
        <input
          id="tamanho"
          type="number"
          value={tamanho}
          onChange={(e) => setTamanho(e.target.value)}
        />
      </div>
      <div>
        <label>Selecione o tipo da fonte:</label>
        <select
          id="corpodotexto"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
        </select>
      </div>
      <div>
        <button onClick={aplicarAlteracoes}>APLICAR</button>
      </div>
      <div id="mostratexto" style={newText}>
        {textoUsuario}
      </div>
    </div>
  );
}

export default App;
