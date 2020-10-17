import http from '../../helpers/http'

export default {
  getCart: (token)=>({
    type: 'GET_CART',
    payload: http(token).get('customer/carts')
  }),
  
}