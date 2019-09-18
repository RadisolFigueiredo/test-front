import React, { Component } from 'react'
import api from '../../Services/api'
import './cart.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as headersActions from '../../Actions/header'
import { Link } from 'react-router-dom'
class Cart extends Component {
  constructor(props) {
    super(props)

    console.log(props)
    this.state = {
      products: [],
      cart: []
    }
  }

  nextActiveHeader = () => {
    this.props.active()
  }

  // state = {
  //   products: [],
  //   cart: []
  // }

  componentDidMount() {
    this.loadApi()
  }

  loadApi = async () => {
    const response = await api.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')

    this.setState({ products: response.data.items, cart: response.data })
  }

  render() {
    const { cart } = this.state
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
                      <strong className="price-product">
                        {'R$ ' + product.product.priceSpecification.originalPrice.toFixed(2)}
                      </strong>
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
              <div className="align-cart">
                <strong>TOTAL</strong>
                <strong>
                  {'R$ ' + Number(cart.subTotal + cart.shippingTotal - cart.discount).toFixed(2)}
                </strong>
              </div>
            </div>
          </div>
          <div>
            <Link to="/payment">
              <strong>SEGUIR PARA O PAGAMENTO</strong>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(headersActions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Cart)
