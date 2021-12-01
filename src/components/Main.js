import React from 'react';
import { Carousel } from 'react-bootstrap';// import emilcy2 from '../imagens/emilcy2.jpg';
// import emilcy3 from '../imagens/emilcy3.jpg';
// import emilcy4 from '../imagens/emilcy4.jpg';
// import emilcy5 from '../imagens/emilcy5.jpg';
import '../css/main.css';
// import publi1 from '../imagens/publi1.jpg';
// import publi2 from '../imagens/publi2.jpg';
import publi3 from '../imagens/publi3.jpg';
// import publi4 from '../imagens/publi4.jpg';
import gravida1 from '../imagens/gravida1.jpg';
import gravida2 from '../imagens/gravida2.jpg';

function Main() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gravida1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gravida2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={publi3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Main;
