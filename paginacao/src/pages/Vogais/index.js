import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../index.css";
import { useState } from "react";

function Vogais() {
  const [palavra, setPalavra] = useState("");
  const [mostrar, setMostrar] = useState("");

  function QtidadeVogais() {
    if (palavra) {
      let letras = "AEIOU";
      let result = [];
      for (let i = 0; i < palavra.length; i++) {
        if (letras.includes(palavra[i].toUpperCase())) {
          result.push(palavra[i]);
        }
      }
      setMostrar(result.length);
    } else {
      setMostrar("Insira uma palavra");
    }
  }
  return (
    <>
      <div className="conteudo">
        <Row>
          <Form>
            <Row className="mb-3 ">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Digite uma palavra:</Form.Label>
                <Form.Control
                  value={palavra}
                  onChange={(e) => setPalavra(e.target.value)}
                  type="text"
                  placeholder="Insira uma palavra sem espaços..."
                />
              </Form.Group>
            </Row>
            <Button onClick={QtidadeVogais} variant="primary" type="button">
              Mostrar quantidade de vogais
            </Button>
            <Row>
              <div className="caixa-exibir">{mostrar}</div>
            </Row>
          </Form>
        </Row>
      </div>
    </>
  );
}

export default Vogais;
