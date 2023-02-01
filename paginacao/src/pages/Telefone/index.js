function TelefoneFormatado() {
  const listaTelefone = ["11982737389", "11934537374", "51984332553"];

  function telefone() {
    let result = listaTelefone.map((item) => {
      let part1 = item.slice(0, 2);
      let part2 = item.slice(2, 7);
      let part3 = item.slice(7, 13);
      let telefoneAjustado = `${part1} ${part2}-${part3}`;
      return (listaTelefone.item = telefoneAjustado);
    });
    alert(result);
    console.log(result);
  }
  telefone();
  return <></>;
}
export default TelefoneFormatado;
