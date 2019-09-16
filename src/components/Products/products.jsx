import React, { Component } from 'react'
import api from '../../Services/api'
import './product.css'

export default class Products extends Component {
  state = {
    products: []
  }
  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async () => {
    const response = await api.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')

    console.log(response.data.items)

    this.setState({ products: response.data.items })
  }

  render() {
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
        </div>
      </div>
    )
  }
}
