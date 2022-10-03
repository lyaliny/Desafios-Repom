import Icones from "./Componentes/Icones";
import InfoTexto from "./Componentes/InfoTexto";

const textoPrincipal = {
  textoNormal: "Vibrante, confiável e conectada.",
  textoNegrito: "Esta é a Edenred.",
};

function App() {
  return (
    <>
      <Icones />

      <div className="container mt-4">
        <div className="colunas">
          <div className="row">
            <div className="col-sm-12 col-md-6 text" id="descricao">
              <InfoTexto
                textoNormal={textoPrincipal.textoNormal}
                textoNegrito={textoPrincipal.textoNegrito}
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <img
                className="imagem img-fluid"
                src="./mulher1.png"
                alt="mulher cabelos longos sorrindo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
