function NumerosOrdenados() {
  function Ordenar(n1, n2, n3) {
    let array = [n1, n2, n3];
    array.sort((a, b) => a - b);

    alert(`Lista com numeros ordenados ${array}`);
  }
  Ordenar(450, 1000, 300);

  return <></>;
}

export default NumerosOrdenados;
