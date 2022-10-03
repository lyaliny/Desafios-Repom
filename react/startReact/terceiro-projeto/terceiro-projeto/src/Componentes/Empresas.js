let empresas = [
  {
    id: 1,
    imagem: "./pc.png",
    texto: "Gestão de despesas",
  },
  {
    id: 2,
    imagem: "./economia.png",
    texto: "Economia com encargos fiscais",
  },
  {
    id: 3,
    imagem: "./bem-estar.png",
    texto: "Bem-estar",
  },
  {
    id: 4,
    imagem: "./divida.png",
    texto: "Redução de custos",
  },
  {
    id: 5,
    imagem: "./grafico.png",
    texto: "Produtividade",
  },
  {
    id: 6,
    imagem: "./abisenteismo.png",
    texto: "Motivação de equipes<",
  },
  {
    id: 7,
    imagem: "./equipes.png",
    texto: "Redução de absenteísmo",
  },
];

function Empresas() {
  return (
    <>
      {empresas.map((element) => {
        return (
          <div className="col-sm-6 img-group" key={element.id}>
            <img src={element.imagem} alt="" />
            <p className="texto">{element.texto}</p>
          </div>
        );
      })}
    </>
  );
}

export default Empresas;
