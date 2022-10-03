import Article from "./article";

const conteudo = [
  {
    id: 1,
    categoria: "Imprensa",
    titulo: "Nam fringilla, est id sagittis porttitor nisl magna ferm",
    descricao:
      "Cras at tincidunt ex, et porttitor tellus. Nam vitae sapien magna. Praesent nec dignissim sem, eget pharetra enim. Pellentesque imperdiet, mauris eu sodales porta, sapien sapien eleifend justo.",
    img: "./Repom_Logo.png",
    documento: "./Repom_ Frota e soluções de mobilidade _ Edenred.pdf",
  },
  {
    id: 2,
    categoria: "Local",
    titulo:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu sapien a tortor tincidunt scelerisque ac eget nisi.Morbi non laoreet nisl. Mauris congue varius tortor.",
    img: "./Ticket-Color-RGB.png",
    documento: "./Repom_ Frota e soluções de mobilidade _ Edenred.pdf",
  },
  {
    id: 3,
    categoria: "Imprensa",
    titulo:
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
    descricao:
      "Aliquam non lorem purus. Pellentesque condimentum ac lorem fermentum tincidunt. Sed viverra luctus odio. Integer condimentum ligula metus, id rutrum nibh consequat ut.",
    img: "./Repom_Logo.png",
    documento: "./Repom_ Frota e soluções de mobilidade _ Edenred.pdf",
  },
];

function Body() {
  return (
    <header className="App-header">
      <div className="container mt-4">
        <section className="row colunas-container">
          {conteudo.map((element) => {
            return <Article key={element.id} item={element} />;
          })}
        </section>
      </div>
    </header>
  );
}

export default Body;
