import Mulher from "../assets/img/Mulher.png";
import Empresas from "./Empresas.js";

function Body() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="row" id="informacoes">
            <div className="col-md-12">
              <p className="titulo">Empresas</p>
            </div>
            <Empresas />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 imagem-mulher">
          <img className="img-mulher img-fluid" src={Mulher} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Body;
