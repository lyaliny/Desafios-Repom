const icon = [
  {
    link: "https://www.edenred.com.br/contato/#news",
    imagem: "./icons8-avião-de-papel-50.png",
    msg: "Receba as novidades da Edenred.",
  },
  {
    link: "https://bit.ly/3BijWHv",
    imagem: "./icons8-telefone-50.png",
    msg: "Ligue para as marcas da Edenred.",
  },
  {
    link: "mailto:repom@redeestrada.com.br",
    imagem: "./icons8-enviar-50.png",
    msg: "Envie uma mensagem para a Edenred.",
  },
];

function Icones() {
  return (
    <div className="icones" id="icons">
      {icon.map((item) => {
        return (
          <div className="icones-group">
            <a href={item.link} target="_blank" rel="noreferrer">
              <img
                src={item.imagem}
                alt="icone aviao de papel"
                className={`icone ${item === 0 ? "aviao" : ""} ${
                  item === item - 1 ? "carta" : ""
                }`}
              />
            </a>
            <span className="box-texto">
              {item.msg}
              <div className="marcador"></div>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Icones;
