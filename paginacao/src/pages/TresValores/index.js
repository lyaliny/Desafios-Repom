import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../index.css";
import { useState } from "react";
import "./TresValores.css";

function TresValores() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [valor3, setValor3] = useState("");
  const [mostrar, setMostrar] = useState("");

  function valores() {
    // let maior = Number(valor1);
    // let menor = Number(valor1);

    // if (Number(valor2) > maior) {
    //   maior = Number(valor2);
    // }
    // if (Number(valor3) > maior) {
    //   maior = Number(valor3);
    // }
    // if (Number(valor2) < menor) {
    //   menor = Number(valor2);
    // }
    // if (Number(valor3) < menor) {
    //   menor = Number(valor3);
    // }

    let array = [Number(valor1), Number(valor2), Number(valor3)];
    array.sort((a, b) => a - b);

    setMostrar(
      "O menor número é: " +
        array[0] +
        " e o maior número é " +
        array[array.length - 1]
    );
  }

  function limparCampos() {
    setValor1("");
    setValor2("");
    setValor3("");
    setMostrar("");
  }

  function mascara(value, targetState) {
    if (value === "" || Number(value)) {
      if (targetState === 1) {
        setValor1(value);
      }
      if (targetState === 2) {
        setValor2(value);
      }
      if (targetState === 3) {
        setValor3(value);
      }
    }
  }

  return (
    <>
      <div className="conteudo">
        <Row>
          <Form>
            <Row className="mb-3 ">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Valor 1:</Form.Label>
                <Form.Control
                  value={valor1}
                  onChange={(e) => mascara(e.target.value, 1)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Valor 2:</Form.Label>
                <Form.Control
                  value={valor2}
                  onChange={(e) => mascara(e.target.value, 2)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Valor 3:</Form.Label>
                <Form.Control
                  value={valor3}
                  onChange={(e) => mascara(e.target.value, 3)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Col className="botoes">
                <Button onClick={valores} variant="primary" type="button">
                  Mostrar menor e maior valor
                </Button>
                <Button onClick={limparCampos} variant="primary" type="button">
                  Limpar
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mt-3">{mostrar}</Col>
            </Row>
          </Form>
        </Row>
      </div>
    </>
  );
}

export default TresValores;
