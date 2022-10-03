import iconlink from "../assets/img/link.png";

function Title(props) {
  return (
    <div className="link fw-bold">
      <img src={iconlink} alt="icone link" /> {props.categoria}
    </div>
  );
}

function Text(props) {
  return (
    <div className="text">
      <p className="mt-2 fs-4">{props.titulo}</p>
      <p className="fs-6">{props.descricao}</p>
    </div>
  );
}
function Rodape(props) {
  const download = (doc) => {
    window.open(doc);
  };
  return (
    <div className="baixo">
      <div className="ticket mt-2">
        <img src={props.img} alt="ticket edenred" />
      </div>
      <button className="botao" onClick={() => download(props.documento)}>
        BAIXE O PDF
      </button>
    </div>
  );
}

function Article(props) {
  return (
    <article className="col-sm-12 col-md-4 mt-4">
      <div className="colunas">
        <Title categoria={props.item.categoria} />
        <Text titulo={props.item.titulo} descricao={props.item.descricao} />
        <Rodape img={props.item.img} documento={props.item.documento} />
      </div>
    </article>
  );
}

export default Article;
