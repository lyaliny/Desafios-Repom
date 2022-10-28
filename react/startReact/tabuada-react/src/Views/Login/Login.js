import "./Login.css";
import { Link } from "react-router-dom";
import logoRepom from "../../assets/img/logo-repom.png";
import { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [alertaUsuario, setAlertaUsuario] = useState("");
  const [alertaSenha, setAlertaSenha] = useState("");
  const [alertaSucesso, setAlertaSucesso] = useState("");

  function validarLogin() {
    let formValido = true;

    if (!usuario) {
      setAlertaUsuario("Usuário inválido");
      formValido = false;
    } else {
      setAlertaUsuario("");
    }
    if (!senha || senha.length < 6) {
      setAlertaSenha("Senha inválida");
      formValido = false;
    } else {
      setAlertaSenha("");
    }
    return formValido;
  }

  function login() {
    if (validarLogin()) {
      sucesso();
      limparCampos();
    }
  }

  function sucesso() {
    setAlertaSucesso("Login efetuado com sucesso!");
  }

  function limparCampos() {
    setUsuario("");
    setSenha("");
  }

  return (
    <>
      <div className="caixa-login">
        <div className="container">
          <div className="tela">
            <div className="row">
              <img className="imagem" src={logoRepom} alt="" />
              <div className="col">
                <div className="alerta">
                  <label>Usuário*</label>
                  <input
                    type="text"
                    id="login"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                  />
                  <div className="error" id="alertalogin">
                    {alertaUsuario}
                  </div>
                </div>

                <div className="alerta">
                  <label>Senha*</label>
                  <input
                    type="password"
                    id="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <div className="error" id="alertasenha">
                    {alertaSenha}
                  </div>
                </div>

                <div className="lembrar">
                  <input type="checkbox" />
                  Lembrar?
                </div>

                <div>
                  <button onClick={login}>ENTRAR</button>
                </div>

                <div className="esqueci">
                  <Link to="/RecuperarSenha">Esqueci minha senha</Link>
                </div>

                <div id="msgsucesso">
                  <div className="alertaSucesso">{alertaSucesso}</div>
                  <div>
                    <p className="texto">
                      Se ainda não tem uma conta de usuário Repom
                      <br />
                      cadastre-se aqui
                    </p>
                    <Link to="/CadastreSe">
                      <button type="button">CADASTRAR-SE</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
