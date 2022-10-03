import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer titulo="Teste1" />
      <Footer titulo="Teste2" texto="melancia" />
      <Footer texto="morango" />
      <Footer texto="teste" imagem="" />
    </div>
  );
}

export default App;
