import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Search from './components/Search';
import Atendimentos from './components/Atendimentos';
import Sobre from './components/Sobre';
import Artigos from './components/Artigos';
import Contatos from './components/Contatos';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Search />
      <Atendimentos />
      <Sobre />
      <Artigos />
      <Contatos />
    </div>
  );
}

export default App;
