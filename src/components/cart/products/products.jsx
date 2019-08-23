import React, { Component } from 'react'
import api from '../../../services/api'

export default class Products extends Component {
  state = {
    products: [],
  }
  componentDidMount() {
    this.loadProducts();

  }

  loadProducts = async () => {
    const response = await api.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07');

    console.log(response.data.items);

    this.setState({ products: response.data.items });
  }

  render() {
    return (
      <div classNam="product-list">
        {this.state.products.map(product => (
          <div key={product._id}>
            <p>
              {product.product.name}
            </p>
            <p>
              <b>
                {'R$ ' + product.product.priceSpecification.originalPrice.toFixed(2)}
              </b>
            </p>
          </div>
          ))}

      </div>
    )
  }
}
