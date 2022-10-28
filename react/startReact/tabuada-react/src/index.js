import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Views/Tabuada/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App2 from "./Views/Estacoes/App2";
import Login from "./Views/Login/Login";
import CadastreSe from "./Views/Login/CadastreSe";
import RecuperarSenha from "./Views/Login/RecuperarSenha";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/tabuada" element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/estacao" element={<App2 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CadastreSe" element={<CadastreSe />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
