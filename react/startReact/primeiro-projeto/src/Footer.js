function Footer(props) {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <p>{props.texto ? props.texto : "rodapé"}</p>
    </div>
  );
}

export default Footer;
