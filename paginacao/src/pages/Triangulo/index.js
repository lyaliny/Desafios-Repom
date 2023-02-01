import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useState } from "react";
import "../../index.css";

function Triangulo() {
  const [numero, setNumero] = useState("");
  const [mostrar, setMostrar] = useState("");

  function exibirTriangulo() {
    if (numero) {
      debugger;
      let result = "";
      for (let linha = 1; linha <= numero; linha++) {
        for (let asterisco = 1; asterisco <= linha; asterisco++) {
          result += "*";
        }
        result += "</br>";
      }
      setMostrar(result);
    }
  }

  return (
    <>
      <div className="conteudo">
        <Row>
          <Form>
            <Row className="mb-3 ">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Altura</Form.Label>
                <Form.Control
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  type="number"
                  placeholder="Insira um número inteiro"
                />
              </Form.Group>
            </Row>
            <Button onClick={exibirTriangulo} variant="primary" type="button">
              Mostrar
            </Button>
            <Row>
              <div
                className="caixa-exibir"
                dangerouslySetInnerHTML={{ __html: mostrar }}
              />
            </Row>
          </Form>
        </Row>
      </div>
    </>
  );
}

export default Triangulo;
