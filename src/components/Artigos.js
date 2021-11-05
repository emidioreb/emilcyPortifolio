import React from 'react';
import emilcy2 from '../imagens/emilcy2.jpg';
import '../css/artigos.css';

class Artigos extends React.Component {
  render() {
    return (
      <div className="artigos">
        <div className="container center-align">
          <h1 className="header red-text">Artigos</h1>
          <div className="carousel carousel-slider">
            <a className="carousel-item" href="#one!">
              <img src={emilcy2} alt="" />
            </a>
            <a className="carousel-item carousel-artigo" href="#two!">
              <img src={emilcy2} alt="" />
            </a>
            <a className="carousel-item carousel-artigo" href="#three!">
              <img src={emilcy2} alt="" />
            </a>
            <a className="carousel-item carousel-artigo" href="#four!">
              <img src={emilcy2} alt="" />
            </a>
            <a className="carousel-item carousel-artigo" href="#five!">
              <img src={emilcy2} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Artigos;
