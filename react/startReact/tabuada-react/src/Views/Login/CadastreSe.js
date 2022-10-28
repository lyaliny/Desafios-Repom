import { Link } from "react-router-dom";
import "./Login.css";
import logoRepom from "../../assets/img/logo-repom.png";
import { useState } from "react";

function CadastreSe() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msgSucesso, setMsgSucesso] = useState("");
  const [formErro, setFormErro] = useState({
    nome: "",
    telefone: "",
    estadoCivil: "",
    email: "",
    senha: "",
  });
  let formValido = true;

  function validaCadastro() {
    setFormErro({
      nome: "",
      telefone: "",
      estadoCivil: "",
      email: "",
      senha: "",
    });
    if (!nome) {
      setFormErro((prevState) => ({ ...prevState, nome: "Nome inválido." }));
      formValido = false;
    }
    if (!telefone || telefone.length < 11) {
      setFormErro((prevState) => ({
        ...prevState,
        telefone: "Telefone inválido.",
      }));
      formValido = false;
    }
    if (!estadoCivil) {
      setFormErro((prevState) => ({
        ...prevState,
        estadoCivil: "Estado civil inválido",
      }));
      formValido = false;
    }
    if (!email) {
      setFormErro((prevState) => ({
        ...prevState,
        email: "E-mail inválido",
      }));
      formValido = false;
    }
    if (!senha || senha.length < 6) {
      setFormErro((prevState) => ({
        ...prevState,
        senha: "Senha inválida",
      }));
      formValido = false;
    }
    return formValido;
  }

  function confirmaCadastro() {
    setMsgSucesso("Cadastro criado com sucesso");
  }
  function limparCampos() {
    setNome("");
    setTelefone("");
    setEmail("");
    setEstadoCivil("");
    setSenha("");
  }

  function cadastroEfetuado() {
    if (validaCadastro()) {
      confirmaCadastro();
      limparCampos();
    }
  }

  return (
    <>
      <div className="caixa-login">
        <div className="container">
          <div className="tela mt-0">
            <div className="row">
              <img className="imagem" src={logoRepom} alt="" />
              <div className="nome">
                <label>Nome completo:</label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
                <div className="error" id="alertanome">
                  {formErro.nome}
                </div>
              </div>
              <div className="alerta">
                <label>Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
                <div className="error" id="alertatelefone">
                  {formErro.telefone}
                </div>
              </div>
              <div className="alerta">
                <label>Estado civil</label>
                <select
                  name="Estado civil"
                  className="selecao"
                  id="selecao"
                  value={estadoCivil}
                  onChange={(e) => setEstadoCivil(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="Casado">Casado(a)</option>
                  <option value="Solteiro">Solteiro(a)</option>
                  <option value="Divorciado">Divorciado(a)</option>
                  <option value="Viuvo">Viuvo(a)</option>
                </select>
                <div className="error" id="alertaestadocivil">
                  {formErro.estadoCivil}
                </div>
              </div>
              <div className="alerta">
                <label>E-mail</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="error" id="alertaemail">
                  {formErro.email}
                </div>
              </div>
              <div className="alerta">
                <label>Senha</label>
                <input
                  type="password"
                  id="senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                <div className="error" id="alertasenha">
                  {formErro.senha}
                </div>
              </div>

              <div>
                <button type="button" onClick={cadastroEfetuado}>
                  CRIAR CONTA
                </button>
              </div>
              <div className="voltar">
                <Link to="/Login">Voltar para login</Link>
              </div>

              <div id="contacriada" className="alertaSucesso">
                {msgSucesso}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CadastreSe;
