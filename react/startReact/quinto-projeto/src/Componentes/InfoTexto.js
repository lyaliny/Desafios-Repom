function InfoTexto(props) {
  return (
    <div className="texto">
      <p>{props.textoNormal}</p>
      <p>
        <b>{props.textoNegrito}</b>
      </p>
    </div>
  );
}

export default InfoTexto;
