import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
// import Search from './components/Search';
// import Atendimentos from './components/Atendimentos';
import Sobre from './components/Sobre';
// import Artigos from './components/Artigos';
import Contatos from './components/Contatos';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Sobre />
        {/* <Artigos />
        <Search />
        <Atendimentos /> */}
        <Contatos />
      </div>
    );
  }
}

export default App;
