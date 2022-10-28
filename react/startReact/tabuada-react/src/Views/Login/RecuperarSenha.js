import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logoRepom from "../../assets/img/logo-repom.png";

function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [msgSucesso, setMsgSucesso] = useState("");
  const [msg, setMsg] = useState("");

  function validaEmail() {
    if (!email) {
      setMsg("E-mail inválido");
      setMsgSucesso("");
    } else {
      setMsgSucesso("Uma nova senha será enviada em seu e-mail");
      limparCampo();
    }
  }

  function limparCampo() {
    setEmail("");
    setMsg("");
  }

  return (
    <div className="caixa-login">
      <div className="container">
        <div className="tela">
          <div className="row">
            <div className="col">
              <img className="imagem" src={logoRepom} alt="" />
              <div>
                <p className="texto">
                  Para recuperar seu acesso,
                  <br />
                  precisamos do seu e-mail
                </p>
                <label>E-mail:</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                />
                <div className="error" id="alertaemail">
                  {msg}
                </div>
              </div>
              <div>
                <button onClick={validaEmail}>RECUPERAR SENHA</button>
              </div>
              <div className="esqueci">
                <Link to="/Login" className="tela">
                  Voltar para login
                </Link>
              </div>
              <div id="msgemailenviado" className="alertaSucesso">
                {msgSucesso}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecuperarSenha;
