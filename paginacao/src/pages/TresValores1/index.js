import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";

function TresValores1() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [valor3, setValor3] = useState("");
  const [mostrar, setMostrar] = useState("");

  function valores() {
    // let maior = Number(valor1);
    // let menor = Number(valor1);

    let array = [Number(valor1), Number(valor2), Number(valor3)];
    array.sort((a, b) => a - b);

    setMostrar(
      `O menor valor é ${array[0]} e o maior valor é o ${
        array[array.length - 1]
      }`
    );
  }

  // function mascara(value, startTarget){
  //   if(value === "" || value === Number(value)){
  //     setValor1
  //   }
  // }

  function limparCampos() {
    setValor1("");
    setValor2("");
    setValor3("");
    setMostrar("");
  }

  return (
    <div className="conteudo">
      <Row>
        <Form>
          <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Valor 1:</Form.Label>
              <Form.Control
                value={valor1}
                onChange={(e) => setValor1(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Valor 2:</Form.Label>
              <Form.Control
                value={valor2}
                onChange={(e) => setValor2(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Valor 3:</Form.Label>
              <Form.Control
                value={valor3}
                onChange={(e) => setValor3(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Button onClick={valores} variant="primary" type="button">
                Mostrar menor e maior valor
              </Button>
            </Col>
            <Col>
              <Button onClick={limparCampos} variant="primary" type="button">
                Limpar
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>{mostrar}</Col>
          </Row>
        </Form>
      </Row>
    </div>
  );
}

export default TresValores1;
