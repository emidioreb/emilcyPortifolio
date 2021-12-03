import React from 'react';
import '../css/main.css';
// import emilcyFoto from '../imagens/emilcy.png';
import logo from '../imagens/logo.png';
import emilcyPerfil2 from '../imagens/emilcyPerfil2.png';

function Main() {
  return (
    <div>
      <div className="main">
        <img width="550" src={logo} alt="logo-emilcy" />
        <div className="apresentacao">
          <img className="mainFoto" width="450" src={emilcyPerfil2} alt="foto-emilcy" />
        </div>
      </div>
    </div>
  );
}

export default Main;
