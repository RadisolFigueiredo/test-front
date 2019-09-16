import React, { Component } from 'react'
import api from '../../Services/api'
import './product.css'

export default class Products extends Component {
  state = {
    products: [],
    cart: []
  }

  componentDidMount() {
    this.loadApi()
    // this.loadCart()
  }

  loadApi = async () => {
    const response = await api.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')

    this.setState({ products: response.data.items, cart: response.data })

    console.log(this.state.products)
    console.log(this.state.cart)
  }

  render() {
    const cart = this.state.cart
    return (
      <div className="background">
        <div className="container">
          <div className="product-h3">
            <h3>PRODUTOS</h3>
          </div>
          <div className="row">
            <div id="products-list">
              {this.state.products.map(product => (
                <div className="cards" key={product._id}>
                  <div className="align-products">
                    <div className="align-img">
                      <img
                        className="img-product"
                        src={product.product.imageObjects[0].small}
                        alt="product"
                      />
                    </div>
                    <div className="name-price">
                      <p className="name-product">{product.product.name}</p>
                      <p className="price-product">
                        {'R$ ' + product.product.priceSpecification.originalPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-finish">
            <div className="cart">
              <div className="align-cart">
                <p>PRODUTOS</p>
                <p>{'R$ ' + Number(cart.subTotal).toFixed(2)}</p>
              </div>
              <div className="align-cart">
                <p>FRETE</p>
                <p>{'R$ ' + Number(cart.shippingTotal).toFixed(2)}</p>
              </div>
              <div className="align-cart discount-color">
                <p>DESCONTO</p>
                <p>{'- R$ ' + Number(cart.discount).toFixed(2)}</p>
              </div>
              <div className="align-cart total-bold">
                <p>TOTAL</p>
                <p>{'R$ ' + Number(cart.subTotal + cart.shippingTotal - cart.discount).toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div>
            <button type="button" class="btn btn-lg btn-block">
              SEGUIR PARA O PAGAMENTO
            </button>
          </div>
        </div>
      </div>
    )
  }
}
