import React from 'react';
import '../css/header.css';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="# " className="brand-logo left">Logo</a>
          <ul id="nav-mobile" className="right">
            <li><a href="início">Início</a></li>
            <li><a href="sobre">Sobre</a></li>
            <li><a href="artigos">Artigos</a></li>
            <li><a href="contatos">Contatos</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
