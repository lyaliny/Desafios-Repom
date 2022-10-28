import "./App.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ItemLista(props) {
  function abrirModal() {
    debugger;
    props.handleShow();
    console.log(props.setNomeModal);
    props.setNomeModal(props.nome);
    props.setIdadeModal(props.idade);
    props.setIndiceEdicao(props.indice);
  }

  return (
    <tr>
      <td>{props.nome}</td>
      <td>{props.idade}</td>
      <td>
        <button
          type="button"
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={abrirModal}
        >
          Editar
        </button>
        <button
          onClick={props.excluir}
          className="btn btn-danger m-1"
          type="button"
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nomeModal, setNomeModal] = useState("");
  const [idadeModal, setIdadeModal] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  const [clientes, setClientes] = useState([
    { nome: "João", idade: 21 },
    { nome: "Maria", idade: 30 },
    { nome: "Carlos", idade: 11 },
  ]);
  const [indiceEdicao, setIndiceEdicao] = useState("");

  function resetar() {
    setClientes([]);
    setNome("");
    setIdade("");
  }

  function botaoEnviar() {
    if (nome && idade) {
      // let clientesAtualizados = [...clientes];
      // clientesAtualizados.push({ nome: nome, idade: idade });
      // setClientes(clientesAtualizados);
      //adicionando item em um array de variavel de estado.
      setClientes((prevState) => [...prevState, { nome: nome, idade: idade }]);
    } else {
      alert("Digite informações válidas.");
    }
    setNome("");
    setIdade("");
  }

  function excluir(indice) {
    setClientes((prevState) => [
      ...prevState.slice(0, indice),
      ...prevState.slice(indice + 1),
    ]);
  }

  function editarCliente() {
    setClientes((prevState) => [
      ...prevState.slice(0, indiceEdicao),
      { ...prevState[indiceEdicao], nome: nomeModal, idade: idadeModal },
      ...prevState.slice(indiceEdicao + 1),
    ]);
    handleClose();
  }

  return (
    <>
      <div className="container mt-3">
        <div className="text-center">
          <h3>Lista de nomes:</h3>
        </div>
        <div className="row">
          <div className="col col-7 mt-3">
            <input
              className="form-control"
              placeholder="Insira o nome"
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="col col-3 mt-3">
            <input
              className="form-control"
              type="number"
              id="idade"
              placeholder="Insira sua idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
          </div>
          <div className="col col-2 d-grid">
            <button
              className="btn btn-dark mt-3"
              type="button"
              onClick={botaoEnviar}
            >
              Enviar
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Idade</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>

            <tbody id="lista">
              {clientes.map((item, indice) => (
                <ItemLista
                  handleShow={handleShow}
                  nome={item.nome}
                  idade={item.idade}
                  key={indice}
                  setNomeModal={setNomeModal}
                  setIdadeModal={setIdadeModal}
                  excluir={() => excluir(indice)}
                  setIndiceEdicao={setIndiceEdicao}
                  indice={indice}
                />
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <button
              className="btn btn-dark mt-3"
              type="button"
              onClick={resetar}
            >
              Resetar
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Editar Dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-sm-6 col-md-12 mt-3">
            <input
              className="form-control"
              placeholder="Insira o nome"
              type="text"
              id="nomeModal"
              value={nomeModal}
              onChange={(e) => setNomeModal(e.target.value)}
            />
          </div>
          <div className="col-sm-6 col-md-12 mt-3">
            <input
              className="form-control"
              type="number"
              id="idadeModal"
              placeholder="Insira sua idade"
              value={idadeModal}
              onChange={(e) => setIdadeModal(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button variant="primary" onClick={editarCliente}>
            Salvar Alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
