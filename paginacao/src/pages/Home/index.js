import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navegate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar(e) {
    e.preventDefault();
    const logar = { email: email, senha: senha };
    localStorage.setItem("login", JSON.stringify(logar));
    navegate("/App/Cadastro");
    console.log(logar);
  }

  return (
    <div className="conteudo">
      <Row>
        <Col xs={16}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Login </Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Entre com um e-mail"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha </Form.Label>
              <Form.Control
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                placeholder="Senha"
              />
            </Form.Group>

            <Button onClick={entrar} variant="primary" type="submit">
              Entrar
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
