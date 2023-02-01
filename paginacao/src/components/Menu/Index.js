import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Menu.css";

function Menu() {
  let navegate = useNavigate();
  const [menuMobile, setMenuMobile] = useState(false);

  function deslogar() {
    localStorage.removeItem("login");
    navegate("/");
  }

  return (
    <>
      <div>
        <span
          id="burguer"
          class="material-symbols-outlined"
          onClick={() => setMenuMobile(!menuMobile)}
        >
          menu
        </span>
      </div>

      <div className={`${menuMobile ? "showMenuMobile" : ""} menu`}>
        <div className="link">
          <Link to="/App/Cadastro">Cadastro</Link>
          <Link to="/App/Dashboard">Dashboard</Link>
          <Link to="/App/Array">Array</Link>
          <Link to="/App/NumerosOrdenados">Numeros Ordenados</Link>
          <Link to="/App/MenorIdade">Menores de Idade</Link>
          <Link to="/App/Triangulo">Triangulo</Link>
          <Link to="/App/Vogais">Vogais</Link>
          <Link to="/App/Telefone">Telefone Formatado</Link>
          <Link to="/App/Caracter">Procurar Caracter</Link>
          <Link to="/App/TresValores">Tres Valores</Link>
          <div>
            <Button onClick={deslogar}>Deslogar</Button>
          </div>
        </div>
      </div>
    </>

    // <div className="menu">
    //   <Nav justify variant="tabs" defaultActiveKey="/home">
    //     <Nav.Item className="link">
    //       <Link to="/App/Cadastro">Cadastro</Link>
    //     </Nav.Item>
    //     <Nav.Item className="link">
    //       <Link to="/App/Dashboard">Dashboard</Link>
    //     </Nav.Item>
    //     <Nav.Item className="link">
    //       <Link to="/App/Array">Array</Link>
    //     </Nav.Item>{" "}
    //     <Nav.Item className="link">
    //       <Link to="/App/NumerosOrdenados">Numeros Ordenados</Link>
    //     </Nav.Item>
    //     <Nav.Item className="link">
    //       <Link to="/App/MenorIdade">Menores de Idade</Link>
    //     </Nav.Item>
    //     <Nav.Item className="link">
    //       <Link to="/App/Triangulo">Triangulo</Link>
    //     </Nav.Item>
    //     <Nav.Item className="link">
    //       <Link to="/App/Vogais">Vogais</Link>
    //     </Nav.Item>
    //     <Nav.Item className="link">
    //       <Link to="/App/Telefone">Telefone Formatado</Link>
    //     </Nav.Item>
    //     <Nav.Item className="link">
    //       <Link to="/App/Caracter">Procurar Caracter</Link>
    //     </Nav.Item>
    //     <Nav.Item className="link">
    //       <Link to="/App/TresValores">Tres Valores</Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Button onClick={deslogar}>Deslogar</Button>
    //     </Nav.Item>
    //   </Nav>
    // </div>
  );
}

export default Menu;
