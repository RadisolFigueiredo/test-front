import React, { Component } from 'react';
import Products from './components/Products/products'
import Header from './components/Header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Products />
      </div>
    );
  }
}

export default App;
