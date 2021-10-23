import React from 'react';
import M from 'materialize-css';
import Header from './components/Header';
import Main from './components/Main';
import Search from './components/Search';
import Atendimentos from './components/Atendimentos';
import Sobre from './components/Sobre';
import Artigos from './components/Artigos';
import Contatos from './components/Contatos';

class App extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
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
}

export default App;
