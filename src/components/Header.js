import React from 'react';
import '../css/header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import grafismoLaranja from '../imagens/GrafismoLaranja.png';

function Header() {
  return (
    <>
      <Navbar className="header">
        <Container>
          <Navbar.Brand className="header" href="#home">
            <img width="50" src={grafismoLaranja} alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="header">Home</Nav.Link>
            <Nav.Link href="#sobre" className="header">Sobre</Nav.Link>
            <Nav.Link href="#publicações" className="header">Publicações</Nav.Link>
            <Nav.Link href="#contatos" className="header">Contatos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
