import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCHED_DETAILED_PRODUCT = 'FETCHED_DETAILED_PRODUCT'
export const FETCHED_ALL_PRODUCTS = 'FETCHED_ALL_PRODUCTS'

export const fetchProduct = (productId) => (dispatch) => {
  request
    .get(`${baseUrl}/products/${productId}`)
    .then(response => dispatch({
      type: FETCHED_DETAILED_PRODUCT,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchAllProducts = () => (dispatch) => {
  request
    .get(`${baseUrl}/products`)
    .then(res => dispatch({
      type: FETCHED_ALL_PRODUCTS,
      payload: res.body
    }))
}

export const createProduct = (product) => (dispatch) => {
  request
    .post(`${baseUrl}/products`)
    .send(product)
    .then(response => alert(JSON.stringify(response.body)))
}