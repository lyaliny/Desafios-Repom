import { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Array() {
  let numeros = [
    1, 90, 30, 77, 2, 4, 21, 33, 45, 35, 8, 9, 0, 2, 76, 98, 100, 22, 25, 55,
    66,
  ];
  //const elementoIndex = numeros.findIndex((number) => number === 77);

  const [campoNumero, setCampoNumero] = useState("");

  function validarCampo() {
    let elementoIndex = numeros.findIndex(
      (number) => number === Number(campoNumero)
    );
    if (elementoIndex >= 0) {
      alert(`O elemento se encontra na posição ${elementoIndex} do Array`);
    } else {
      alert("Elemento não existe no array");
    }
  }

  return (
    <div className="conteudo">
      <div>
        Números: 1, 90, 30, 77, 2, 4, 21, 33, 45, 35, 8, 9, 0, 2, 76, 98, 100,
        22, 25, 55, 66
      </div>
      <Form>
        <Row className="mb-3 campo-numero">
          <Form.Group as={Col} controlId="exampleForm.ControlInput1">
            <Form.Label>Insira um número do array:</Form.Label>
            <Form.Control
              value={campoNumero}
              onChange={(e) => setCampoNumero(e.target.value)}
              type="number"
            />
          </Form.Group>
        </Row>
        <Button onClick={validarCampo} variant="primary" type="button">
          Consultar
        </Button>
      </Form>
    </div>
  );
}

export default Array;
