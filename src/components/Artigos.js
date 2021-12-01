import React from 'react';
import publi1 from '../imagens/publi1.jpg';
import publi2 from '../imagens/publi2.jpg';
import publi3 from '../imagens/publi3.jpg';
import publi4 from '../imagens/publi4.jpg';
import '../css/artigos.css';

class Artigos extends React.Component {
  render() {
    return (
      <div className="artigos">
        <div className="container center-align">
          <h1 className="header red-text">Publicações</h1>
          <div className="carousel carousel-slider center">
            <a className="carousel-item publi" href="#one!">
              <img src={publi1} alt="" />
            </a>
            <a className="carousel-item publi" href="#two!">
              <img src={publi2} alt="" />
            </a>
            <a className="carousel-item publi" href="#three!">
              <img src={publi3} alt="" />
            </a>
            <a className="carousel-item publi" href="#four!">
              <img src={publi4} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Artigos;
