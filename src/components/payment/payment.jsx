import React, { Component } from 'react'
import './product.css'

export default class Products extends Component {
  // state = {
  //   products: [],
  //   cart: []
  // }

  // componentDidMount() {
  //   this.loadProducts()
  //   // this.loadCart()
  // }

  // loadProducts = async () => {
  //   const response = await api.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')

  //   console.log(response.data)

  //   this.setState({ products: response.data.items })
  // }

  // loadCart = async () => {
  //   const response = await api.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')

  //   this.setState({ cart: response.data })

  //   console.log(response.data.subTotal)
  // }

  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="product-h3">
            <h3>PAGAMENTO</h3>
          </div>
          <div className="row">
            <form></form>
          </div>
          <div className="cart-finish">
            <div className="align-cart">
              <p>PRODUTOS</p>
              <p>FRETE</p>
              <p>DESCONTO</p>
              <p><b>TOTAL</b></p>
            </div>
          </div>
          <div>
            <button type="button" class="btn btn-lg btn-block">SEGUIR PARA O PAGAMENTO</button>
          </div>
        </div>
      </div>
    )
  }
}
