import React from 'react';
import '../css/main.css';
import emilcyFoto from '../imagens/emilcy.png';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <p id="main-text">Eu te ajudo a se tornar mãe com segurança e amor.</p>
        {/* <div className="buttons">
          <a className="waves-effect waves-light btn" href="# ">button</a>
          <a className="waves-effect waves-light btn" href="# ">button</a>
        </div> */}
        <div className="apresentacao">
          <img className="materialboxed" width="150" src={emilcyFoto} alt="foto-emilcy" />
          <div id="name">Dra. Emilcy Rebouças</div>
          <div id="obstetra">Genecologista Obstetra</div>
        </div>
      </div>
    );
  }
}

export default Main;
