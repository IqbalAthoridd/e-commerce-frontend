import http from '../../helpers/http'

export default {
  getCart: (token)=>({
    type: 'GET_CART',
    payload: http(token).get('http://localhost:8080/customer/carts')
  }),
  
}