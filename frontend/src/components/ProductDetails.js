import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchProduct, updateProduct} from '../actions/products'
import PropTypes from 'prop-types'
import ProductForm from './ProductForm'

class ProductDetails extends PureComponent {
  state = {
    edit: false
  }

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

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  updateProduct = (product) => {
    this.props.updateProduct(this.props.match.params.id, product)
    this.toggleEdit()
  }

  componentWillMount(props) {
    this.props.fetchProduct(this.props.match.params.id)
  }

  render() {
    const {product} = this.props

    if (!product) return null

    return (
      <div>
        {
          this.state.edit &&
          <ProductForm initialValues={product} onSubmit={this.updateProduct} />
        }

        {
          !this.state.edit &&
          <div>
            <h1>{ product.name }</h1>
            <p>&euro;{ product.price }</p>
            { this.renderImage(product.image) }
            <p>{ product.description }</p>
            <button>Buy this product</button>
            <button onClick={ () => this.toggleEdit() } >Edit Product</button>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ product }) => ({ product })

export default connect(mapStateToProps, { fetchProduct, updateProduct })(ProductDetails)