const frases = [
  { ativo: true, titulo: "+ de 29 anos", descricao: "de experiencia" },
  {
    ativo: true,
    titulo: "+ de 3 mil",
    descricao: "clientes em 15 segmentos",
  },
  { ativo: true, titulo: "+ de 1,7 mil", descricao: "postos credenciados" },
  {
    ativo: true,
    titulo: "+ de 1 milhão",
    descricao: "de caminhoneiros recebendo frete e vale-pedágio",
  },
  {
    ativo: false,
    titulo: "+ de 8 milhões",
    descricao: "de transações por ano",
  },
];

function App() {
  return (
    <div className="container background mt-5">
      <div className="row colunas" id="colunas">
        {frases.map((item) => {
          if (item.ativo) {
            return (
              <div className="col-sm-6 col-md-2 mt-4 mb-4">
                <div className="text fs-5 fw-bold">
                  {item.titulo}
                  <p className="text-p mt-3">{item.descricao}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
