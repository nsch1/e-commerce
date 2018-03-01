import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../actions/products'
import PropTypes from 'prop-types'

class ProductDetails extends PureComponent {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string
    })
  }

  renderImage = (image) => {
    if (image) return <img src={image} />
  }

  componentWillMount() {
    this.props.fetchProduct(this.props.match.params.id)
  }

  render() {
    const {product} = this.props

    if (!product) return null

    return (
      <div>
        <h1>{ product.name }</h1>
        <p>&euro;{ product.price }</p>
        { this.renderImage(product.image) }
        <p>{ product.description }</p>
        <button>Buy this product</button>
      </div>
    )
  }
}

const mapStateToProps = ({ product }) => ({ product })

export default connect(mapStateToProps, { fetchProduct })(ProductDetails)