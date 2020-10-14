import http from '../../helpers/http'
import qs from 'querystring'

export default {
  addCart: (data,token)=>({
    type: 'ADD_CART',
    payload: http(token).post('http://localhost:8080/customer/carts',qs.stringify(data))
  }),
  
}