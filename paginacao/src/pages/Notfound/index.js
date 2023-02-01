import { Row, Col } from "react-bootstrap";
import imagem from "./pagina-n-encontrada.png";
import "../../index.css";
function Notfound() {
  return (
    <>
      <div className="conteudo">
        <Row>
          <Col xs={4}>
            Pagina não encontrada!
            <img
              src={imagem}
              className="imagem"
              alt="imagem pagina não encontrada"
            ></img>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notfound;
