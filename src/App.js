import React, { Component } from 'react'
import Products from './components/Products/products'
import Header from './components/Header/header'
import { Provider } from 'react-redux' //responsável por atualizar o componente da aplicação quando houver mudanças
import store from './Store/index';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Products />
        </div>
      </Provider>
    )
  }
}

export default App
