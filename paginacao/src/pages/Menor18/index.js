import { Button } from "react-bootstrap";
import "../../index.css";

function MenorIdade() {
  function menordeIdade() {
    const pessoas = [
      { nome: "Ana", idade: 12 },
      { nome: "Joice", idade: 6 },
      { nome: "Clara", idade: 18 },
      { nome: "Maria", idade: 19 },
      { nome: "Rute", idade: 20 },
      { nome: "João", idade: 20 },
      { nome: "Pedro", idade: 6 },
      { nome: "Julio", idade: 33 },
      { nome: "Marcos", idade: 25 },
      { nome: "José", idade: 27 },
    ];

    let quantidade = pessoas.filter((pessoa) => {
      return pessoa.idade <= 18;
    });
    console.log(quantidade);
    alert(`A quantidade de pessoas menor igual a 18 é ${quantidade.length}`);
  }

  return (
    <>
      <div className="conteudo">
        <ul>
          <li>nome: "Ana", idade: 12</li>
          <li>nome: "Joice", idade: 6</li>
          <li>nome: "Clara", idade: 18 </li>
          <li>nome: "Maria", idade: 19</li>
          <li>nome: "Rute", idade: 20</li>
          <li>nome: "João", idade: 20</li>
          <li>nome: "Pedro", idade: 6</li>
          <li>nome: "Julio", idade: 33</li>
          <li>nome: "Marcos", idade: 25</li>
          <li>nome: "José", idade: 27</li>
        </ul>

        <div>
          <Button type="button" onClick={menordeIdade}>
            Mostrar qtd menores de idade
          </Button>
        </div>
      </div>
    </>
  );
}

export default MenorIdade;
