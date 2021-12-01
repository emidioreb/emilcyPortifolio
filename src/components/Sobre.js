import React from 'react';
import emilcyFoto from '../imagens/emilcy.png';
import '../css/sobre.css';

class Sobre extends React.Component {
  render() {
    return (
      <div>
        <div className="sobre">
          {/* <h1 className="header red-text">Sobre</h1> */}
          <p id="sobre-text">
            <b>Médica formada pela Universidade Federal do Ceará/ UFC </b>
            em 2012, especializou-se em
            {' '}
            <b>
              Ginecologia e Obstetrícia pela MEAC –
              Maternidade Escola Assis Chateaubriand / UFC
              {' '}
            </b>
            em 2016, é Membro titular da
            {' '}
            <b>
              Federação
              Brasileira de Ginecologia e Obstetrícia
            </b>
            {' '}
            desde 2017.
            Atualmente é Preceptora do Serviço de Pré-Natal de Alto Risco
            e
            {' '}
            <b>
              Plantonista do Setor de Urgência do Centro Obstétrico da MEAC.
            </b>
          </p>
          {/* <div className="buttons">
          <a className="waves-effect waves-light btn" href="# ">button</a>
          <a className="waves-effect waves-light btn" href="# ">button</a>
        </div> */}
          <div className="apresentacao">
            <img className="materialboxed" width="350" src={emilcyFoto} alt="foto-emilcy" />
            <div id="name">Dra. Emilcy Rebouças</div>
            <div id="obstetra">Genecologista Obstetra</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sobre;
