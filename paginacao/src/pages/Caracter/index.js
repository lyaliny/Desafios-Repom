import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../index.css";
import "./Caracter.css";
import { useState } from "react";

function Caracter() {
  const [palavra, setPalavra] = useState("");
  const [string, setString] = useState("");
  const [mostrar, setMostrar] = useState("");

  function QtidadeStrings() {
    if (palavra) {
      let result = [];
      for (let i = 0; i < palavra.length; i++) {
        if (string.includes(palavra[i])) {
          result.push(palavra[i]);
        }
      }
      console.log(result);
      setMostrar(result.length);
    } else {
      setMostrar("Insira um texto");
    }
  }
  function limparCampos() {
    setPalavra("");
    setString("");
    setMostrar("");
  }
  return (
    <>
      <div className="conteudo">
        <Row>
          <Form>
            <Row className="mb-3 inputs ">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Texto:</Form.Label>
                <Form.Control
                  value={palavra}
                  onChange={(e) => setPalavra(e.target.value)}
                  placeholder="Insira uma palavra sem espaços..."
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Digite a string que deseja encontrar:</Form.Label>
                <Form.Control
                  value={string}
                  onChange={(e) => setString(e.target.value)}
                  placeholder="Insira uma a string..."
                />
              </Form.Group>
            </Row>
            <Row className="botoes">
              <Button onClick={QtidadeStrings} variant="primary" type="button">
                Mostrar quantidade de strings
              </Button>

              <Button onClick={limparCampos} variant="primary" type="button">
                Limpar dados
              </Button>

              <Row>
                <div className="caixa-exibir">{mostrar}</div>
              </Row>
            </Row>
          </Form>
        </Row>
      </div>
    </>
  );
}

export default Caracter;
