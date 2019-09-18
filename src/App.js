import React, { Component } from 'react'
import Routes from './routes';
import Header from './components/Header/header'
import { Provider } from 'react-redux' //responsável por atualizar o componente da aplicação quando houver mudanças
import store from './Store/index';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Routes />
        </div>
      </Provider>
    )
  }
}

export default App
